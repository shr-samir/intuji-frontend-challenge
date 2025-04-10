# Intuji Frontend Challenge

This is a React-based frontend project for the Intuji Frontend Challenge. The project demonstrates a responsive dashboard layout with a sidebar, search functionality, and dynamic routing with reusable components.

## Features

### **Responsive Sidebar**
  - Includes navigation links with active and hover states.
  - Collapses into a hamburger menu on smaller screens.
  - Smooth `sliding animations` for menu transitions.

### **Search Functionality**
- A search bar with a clear button for resetting the query.
- Dynamically updates the query state as the user types.

### **Routing**:
- Uses `react-router-dom` for navigation.
- A `NotFound` page is displayed for undefined routes.

### **Dashboard Layout**
- A grid-based layout for displaying key sections:
  - **Overview**: Displays statistics like balance, savings, expenses, and incomes using `StatCard` components.
  - **Saving Plan**: Lists saving plans with progress bars using `SavingPlanCard` components.
  - **Analytics**: Displays a graph or chart for data visualization.
  - **Recent Transactions**: Lists recent transactions using `RecentTransactionCard` components.
- Fully responsive design for all screen sizes.

## Tech Stack

- **React**: For building the user interface.
- **React Router**: For client-side routing.
- **Tailwind CSS**: For styling and responsive design.
- **Vite**: For fast development and build tooling.
- **TypeScript**: For type safety.

## Setup Guide

Follow these steps to set up and run the project locally:

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn package manager

### Steps

1. **Clone the Repository**:

```bash
 git clone git@github.com:shr-samir/intuji-frontend-challenge.git
```

```bash
 cd intuji-frontend-associate-challenge
```

2. **Install Dependencies**:

```bash
npm install
```

3. **Start the Development Server**:

```bash
npm run dev
```
