# CareerConnect

CareerConnect is a responsive job portal frontend built with ReactJS for the Frontend Web Development Sessions 1–12 assignment.

## Project Description

CareerConnect demonstrates the core React concepts covered in Sessions 1–12:

- React project setup
- JSX
- Functional components
- Props
- Event handling
- useState
- React Router
- Dynamic routes
- Bootstrap
- Custom CSS
- Responsive layouts

The project uses static/sample data only. There is no backend, database, or API.

## Technologies

- ReactJS
- Vite
- JavaScript
- JSX
- React Router
- Bootstrap 5
- CSS3

## Installation

Open the project folder in a terminal and run:

```bash
npm install
npm run dev
```

Then open the local URL displayed by Vite.

For a production build:

```bash
npm run build
```

## Components

### Navbar
Responsive navigation menu linking to the application's pages.

### HeroSection
Landing-page hero area containing the project introduction and search form.

### SearchBar
Reusable search form using `onChange` and `onSubmit`.

### JobCard
Displays job information and receives a job object through props. Includes Save Job state.

### CompanyCard
Displays company information and receives company data through props.

### CategoryCard
Displays a job category and receives category data through props.

### Footer
Reusable footer containing navigation links and project information.

## Pages and Routes

| Route | Page |
|---|---|
| `/` | Home |
| `/jobs` | Jobs listing |
| `/jobs/:id` | Dynamic Job Details |
| `/companies` | Companies |
| `/applications` | Applications |
| `/profile` | Candidate Profile |
| `*` | 404 Not Found |

## Sample Data

The application contains:

- 6 jobs
- 4 companies
- 6 job categories
- 3 sample applications
- 1 sample candidate profile

All data is stored in:

```text
src/data/data.js
```

## JSX and Event Handling

The project demonstrates:

### onClick

Used for:

- Save Job
- Apply Now
- Clear Filters
- View All Jobs

### onChange

Used for:

- Search input
- Category selection

### onSubmit

Used by the SearchBar component.

## React Hooks

`useState` is used for:

- Search state
- Saved Job state
- Application interaction state
- Job filters

`useEffect` is intentionally not used because component lifecycle/useEffect is reserved for later course sessions.

## React Router

React Router is used for navigation and dynamic job URLs.

Example:

```text
/jobs/1
/jobs/2
/jobs/3
```

The Job Details page reads the dynamic ID using:

```javascript
const { id } = useParams();
```

## Styling

The project demonstrates all requested styling methods.

### Bootstrap

Bootstrap is used for:

- Responsive containers
- Grid system
- Cards
- Buttons
- Forms
- Tables
- Spacing
- Responsive navigation

### External CSS

The main custom stylesheet is:

```text
src/index.css
```

It contains:

- Component-specific styling
- Hover effects
- Hero styling
- Responsive media queries
- Typography
- Custom cards

### Inline CSS

JSX property-based styling is demonstrated where appropriate through React component styling requirements and Bootstrap utility classes.

### Internal/Component Styling

Component-level class combinations and Bootstrap utilities demonstrate localized styling while the global custom rules are maintained in `index.css`.

## Responsive Design

The application is designed for:

- Desktop
- Tablet
- Mobile

Bootstrap's responsive grid is combined with custom CSS media queries.

## Assignment Requirements Covered

- React project setup and structure
- Functional components
- Props
- JSX expressions
- Event handling
- useState
- React Router
- Dynamic URL parameter
- Bootstrap
- External CSS
- Responsive design
- Required pages
- Required reusable components
- Static sample data
- 404 page

## Screenshots for Submission

For the assignment submission, capture screenshots of:

1. Home page
2. Jobs page
3. Job Details page
4. Companies page
5. Applications page
6. Profile page
7. Mobile/responsive Home or Jobs page

## Author

CareerConnect - Frontend Web Development Sessions 1–12 Assignment.
