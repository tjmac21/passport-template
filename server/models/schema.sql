CREATE TABLE profiles (
  id UUID PRIMARY KEY REFERENCES auth.users(id),
  full_name TEXT,
  phone_number TEXT,
  membership_status TEXT,
  created_at TIMESTAMP DEFAULT NOW()
);

CREATE TABLE companies (
  id UUID PRIMARY KEY,
  name TEXT,
  description TEXT,
  address TEXT,
  phone_number TEXT,
  website TEXT,
  owner_id UUID REFERENCES auth.users(id),
  created_at TIMESTAMP DEFAULT NOW()
);

CREATE TABLE sessions (
  id UUID PRIMARY KEY,
  company_id UUID REFERENCES companies(id),
  name TEXT,
  description TEXT,
  price NUMERIC,
  start_time TIMESTAMP,
  end_time TIMESTAMP,
  address TEXT,
  max_capacity INTEGER,
  dynamic_price BOOLEAN DEFAULT false,
  current_price NUMERIC,
  created_at TIMESTAMP DEFAULT NOW()
);

CREATE TABLE user_sessions (
  id UUID PRIMARY KEY,
  user_id UUID REFERENCES auth.users(id),
  session_id UUID REFERENCES sessions(id),
  status TEXT,
  booked_at TIMESTAMP
);

CREATE TABLE waitlists (
  id UUID PRIMARY KEY,
  user_ids JSONB,
  session_id UUID REFERENCES sessions(id)
);

ALTER TABLE auth.users ADD CONSTRAINT unique_email UNIQUE (email);

ALTER TABLE auth.users ADD COLUMN payment_method_id TEXT; 