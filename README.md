# Passport-Template

Passport-Template is a ClassPass-style application that allows users to discover, book, and attend sessions offered by different companies (e.g., yoga classes, psychologist appointments, massages, etc.). 

## Features

- User authentication (sign-up, login, password management)
- Session exploration and booking
- User profiles and booking history
- Company dashboards for managing sessions
- Waitlist functionality for full sessions
- Dynamic pricing and surge pricing

## Setup

### Prerequisites

- Node.js (v14 or later)
- npm (v6 or later)
- PostgreSQL (v12 or later)

### Installation

1. Clone the repository:

   ```
   git clone https://github.com/your-username/passport-template.git
   ```

2. Install dependencies:

   ```
   cd passport-template
   npm install
   ```

3. Set up the database:

   ```
   createdb passport_template
   psql -d passport_template -f server/db/schema.sql
   ```

4. Start the development server:

   ```
   npm run dev
   ```

The application will be available at `http://localhost:3000`.

## Documentation

- [API Documentation](docs/api.md)
- [Architecture and Design](docs/architecture.md)
- [User Guide](docs/user-guide.md)

## Contributing

Please read [CONTRIBUTING.md](CONTRIBUTING.md) for details on our code of conduct and the process for submitting pull requests.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details. 