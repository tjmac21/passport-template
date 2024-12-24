# Architecture and Design

Passport-Template follows a client-server architecture, with a React front-end communicating with a Node.js/Express back-end via a RESTful API. The back-end interacts with a PostgreSQL database using Supabase.

## System Components

### Front-end (React)

- **Pages**: The main pages of the application, such as Home, Explore, Profile, etc.
- **Components**: Reusable UI components, such as SessionBrief, Loading, etc.
- **Hooks**: Custom React hooks for managing state and side effects, such as useAuth, useCompany, etc.

#### Building the Client-side Application

To create a production-ready build of the client-side application, run the following command in the `client` directory:

```
npm run build
```

This command will generate optimized and minified files in the `client/build` directory, which can be served by a web server or deployed to a hosting platform.

### Back-end (Node.js/Express)

- **Routes**: Express routes that define the API endpoints and handle incoming requests.
- **Controllers**: Functions that contain the business logic for each API endpoint.
- **Models**: Data models that define the structure of the data in the database.
- **Database**: A PostgreSQL database hosted on Supabase.

### Database (PostgreSQL)

- **Tables**: The main entities in the system, such as users, sessions, companies, etc.
- **Relationships**: The associations between entities, such as a session belonging to a company.

## Data Flow

1. The user interacts with the React UI, which dispatches actions to update the application state.
2. When data needs to be retrieved or updated, the React components call the appropriate service module.
3. The service modules make HTTP requests to the Express API endpoints.
4. The Express routes receive the requests and call the appropriate controller functions.
5. The controller functions interact with the database using Supabase's API to retrieve or update data.
6. The controllers send responses back to the React front-end, which updates the UI with the new data.

## Key Design Decisions

- **React Hooks**: We use React hooks extensively to manage state and side effects in a functional component-based architecture. This makes the code more reusable and easier to reason about.
- **Supabase**: We use Supabase as a backend-as-a-service to simplify our database and authentication management. This allows us to focus on the core application logic.
- **RESTful API**: We follow REST principles in designing our API, with clear separation of concerns between the front-end and back-end. This makes the system more modular and maintainable.

## Diagrams

[Include any relevant architecture or sequence diagrams here]

## Payments

The application integrates with Stripe for processing payments. Stripe is used on both the front-end and back-end to handle payment flows.

### Front-end Payment Components

The `PaymentForm` component (`client/src/components/PaymentForm.js`) is responsible for collecting card details from the user. It uses the `loadStripe` function from `@stripe/stripe-js` to load the Stripe library and the `Elements` provider from `@stripe/react-stripe-js` to wrap the form.

### Back-end Payment Routes

The `/create-checkout-session` route (`server/routes/payments.js`) creates a new Checkout Session using the `stripe.checkout.sessions.create` method. It requires the following parameters:
- `payment_method_types`: The types of payment methods accepted (e.g., card)
- `line_items`: An array of items being purchased, including the price and quantity
- `success_url`: The URL to redirect to after a successful payment
- `cancel_url`: The URL to redirect to if the payment is canceled

### Booking a Session with Payment

When a user books a session, the `bookSession` function from the `useAuth` hook (`client/src/hooks/useAuth.js`) is called. This function sends a request to the server to create a new Checkout Session. After a successful payment, the `handlePaymentSuccess` function is called to complete the booking process.

### Saving and Using a Payment Method

The `getPaymentMethod` and `savePaymentMethod` functions in the `useAuth` hook are used to retrieve and save a user's payment method. The saved payment method is displayed to the user, allowing them to book a session with their saved card using the `handleSavedCardBooking` function.

### Testing the Payment Flow

To test the payment flow, use Stripe's test card numbers (e.g., 4242 4242 4242 4242). Note that in test mode, actual payments are not processed.

### Deployment and Environment Variables

Make sure to set the following environment variables for Stripe:
- `STRIPE_SECRET_KEY`: The secret key for your Stripe account
- `STRIPE_PUBLISHABLE_KEY`: The publishable key for your Stripe account

Configure these variables in your deployment environment (e.g., Heroku, AWS) to ensure the application can communicate with Stripe in production.

#### Environment Setup

The `.env.example` files in the `client` and `server` directories show the required environment variables for the application. To set up your environment:

1. Create a `.env` file in both the `client` and `server` directories.
2. Copy the contents of the respective `.env.example` file into the `.env` file.
3. Replace the placeholder values with your actual environment variable values.

Note: The `.env` files should not be committed to version control, as they may contain sensitive information like API keys. 