CREATE TABLE users (
  id UUID PRIMARY KEY,
  email TEXT UNIQUE, 
  hashed_password TEXT,
  created_at TIMESTAMP DEFAULT NOW()
);

-- Create profiles table
CREATE TABLE profiles (
    id UUID PRIMARY KEY REFERENCES auth.users(id),
    full_name TEXT,
    phone_number TEXT,
    membership_status TEXT CHECK (membership_status IN ('active', 'on_hold', 'canceled', 'waitlist')),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Create companies table
CREATE TABLE companies (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    name TEXT NOT NULL,
    description TEXT,
    address TEXT,
    phone_number TEXT,
    website TEXT,
    owner_id UUID REFERENCES auth.users(id),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Create sessions table
CREATE TABLE sessions (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    company_id UUID REFERENCES companies(id) ON DELETE CASCADE,
    name TEXT NOT NULL,
    description TEXT,
    price NUMERIC(10,2) NOT NULL,
    start_time TIMESTAMP WITH TIME ZONE NOT NULL,
    end_time TIMESTAMP WITH TIME ZONE NOT NULL,
    address TEXT,
    max_capacity INTEGER CHECK (max_capacity > 0),
    dynamic_price BOOLEAN DEFAULT false,
    current_price NUMERIC(10,2),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT valid_timeframe CHECK (end_time > start_time)
);

-- Create user_sessions table
CREATE TABLE user_sessions (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
    session_id UUID REFERENCES sessions(id) ON DELETE CASCADE,
    status TEXT CHECK (status IN ('booked', 'cancelled', 'waitlisted', 'attended')),
    booked_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    UNIQUE(user_id, session_id)
);

-- Create waitlists table
CREATE TABLE waitlists (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    session_id UUID REFERENCES sessions(id) ON DELETE CASCADE,
    user_ids UUID[] NOT NULL,
    CONSTRAINT valid_user_ids CHECK (array_length(user_ids, 1) > 0)
);

ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE companies ENABLE ROW LEVEL SECURITY;
ALTER TABLE sessions ENABLE ROW LEVEL SECURITY;
ALTER TABLE user_sessions ENABLE ROW LEVEL SECURITY;
ALTER TABLE waitlists ENABLE ROW LEVEL SECURITY;

-- Profiles Policies
CREATE POLICY "Users can view their own profile" 
ON profiles
FOR SELECT
TO authenticated 
USING (auth.uid() = id);

CREATE POLICY "Users can update their own profile"
ON profiles
FOR UPDATE
TO authenticated
USING (auth.uid() = id);

CREATE POLICY "Users can insert their own profile"
ON profiles
FOR INSERT
TO authenticated
WITH CHECK (auth.uid() = id);

-- Companies Policies
CREATE POLICY "Anyone can view companies"
ON companies
FOR SELECT
TO authenticated
USING (true);

CREATE POLICY "Owners can update their companies"
ON companies
FOR UPDATE
TO authenticated
USING (auth.uid() = owner_id);

CREATE POLICY "Owners can delete their companies"
ON companies
FOR DELETE
TO authenticated
USING (auth.uid() = owner_id);

CREATE POLICY "Users can create companies"
ON companies
FOR INSERT
TO authenticated
WITH CHECK (auth.uid() = owner_id);

-- Sessions Policies
CREATE POLICY "Anyone can view sessions"
ON sessions
FOR SELECT
TO authenticated
USING (true);

CREATE POLICY "Company owners can manage sessions"
ON sessions
FOR ALL
TO authenticated
USING (
    auth.uid() IN (
        SELECT owner_id 
        FROM companies 
        WHERE companies.id = sessions.company_id
    )
);

-- User_Sessions Policies
CREATE POLICY "Users can view their bookings"
ON user_sessions
FOR SELECT
TO authenticated
USING (auth.uid() = user_id);

CREATE POLICY "Users can book sessions"
ON user_sessions
FOR INSERT
TO authenticated
WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update their bookings"
ON user_sessions
FOR UPDATE
TO authenticated
USING (auth.uid() = user_id);

CREATE POLICY "Company owners can view their session bookings"
ON user_sessions
FOR SELECT
TO authenticated
USING (
    EXISTS (
        SELECT 1 
        FROM sessions s
        JOIN companies c ON s.company_id = c.id
        WHERE s.id = user_sessions.session_id
        AND c.owner_id = auth.uid()
    )
);

-- Waitlists Policies
CREATE POLICY "Anyone can view waitlists"
ON waitlists
FOR SELECT
TO authenticated
USING (true);

CREATE POLICY "Users can join waitlists"
ON waitlists
FOR UPDATE
TO authenticated
USING (
    auth.uid() = ANY(user_ids)
);

CREATE POLICY "Company owners can manage waitlists"
ON waitlists
FOR ALL
TO authenticated
USING (
    EXISTS (
        SELECT 1 
        FROM sessions s
        JOIN companies c ON s.company_id = c.id
        WHERE s.id = waitlists.session_id
        AND c.owner_id = auth.uid()
    )
);

ALTER TABLE auth.users ADD CONSTRAINT unique_email UNIQUE (email);

ALTER TABLE auth.users ADD COLUMN payment_method_id TEXT; 