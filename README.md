# PragatiGPT - Your Local Government Scheme Finder 🇮🇳

## Objective

PragatiGPT is a web application designed to help Indian citizens easily discover government welfare schemes they might be eligible for based on their demographic profile (age, gender, and occupation). The primary goal is to simplify access to information about these schemes, moving away from complex government portals towards a user-friendly, multilingual interface.

This project demonstrates a **rule-based scheme matching system** implemented entirely on the client-side using JavaScript, without relying on external AI APIs for the core scheme-finding logic.

## Key Features

*   **User-Friendly Interface:** Simple form to input user details.
*   **Multilingual Support:** Interface and scheme information available in multiple Indian languages (Hindi, English, Bengali, Tamil, Telugu, Marathi, Gujarati, Kannada, Malayalam).
*   **Local Scheme Database:** Contains a curated list of representative government schemes with their eligibility criteria.
*   **Rule-Based Matching:** JavaScript logic matches user input against the local scheme database.
*   **Clear Output:** Presents eligible schemes in a structured and easy-to-understand format.
*   **Responsive Design:** Adapts to various screen sizes (desktop, tablet, mobile).
*   **No External API for Scheme Finding:** The core scheme suggestion logic is client-side.

## Web Architecture

This project is a **client-side single-page application (SPA)**.

1.  **Frontend (Client-Side):**
    *   **HTML (`index.html`):** Defines the structure and layout of the web page, including the input form, navigation, and sections for displaying information.
    *   **CSS (`style.css`):** Handles all the styling and visual presentation, ensuring a responsive and aesthetically pleasing design.
    *   **JavaScript (`script.js`):**
        *   **DOM Manipulation:** Interacts with the HTML elements to display dynamic content, handle user input, and update the UI.
        *   **Translation Engine:** Manages multilingual content for the entire application.
        *   **Scheme Matching Logic:** Contains the core rule-based algorithm that filters and suggests schemes based on user input from a predefined local dataset.
        *   **Event Handling:** Manages form submissions, language switching, and other user interactions.
        *   **UI Enhancements:** Implements features like smooth scrolling and animated counters.

2.  **No Backend (Server-Side) for Core Logic:**
    *   The scheme data and matching logic are embedded within the JavaScript file (`localSchemesData` array). This makes the application self-contained and deployable on any static web hosting service (like GitHub Pages, Netlify, Vercel).


## Codebase Explanation

### 1. `index.html`

*   **Structure:** Standard HTML5 document structure.
*   **Meta Tags:** Includes viewport settings for responsiveness and character encoding.
*   **Fonts:** Links to Google Fonts (Noto Sans Devanagari, Poppins, Roboto) and Font Awesome for icons.
*   **Header:** Contains the logo, application name (`PragatiGPT`), navigation links, and a language switcher dropdown.
    *   Navigation links use `href="#section-id"` for smooth scrolling.
    *   Elements have `data-translate-key` attributes for multilingual text.
*   **Main Content Sections:**
    *   `#hero`: Introductory section with a call-to-action.
    *   `#stats`: Displays key statistics with animated counters.
    *   `#about`: Provides information about the project.
    *   `#how-it-works`: Explains the steps for using the application.
    *   `#scheme-finder`: Contains the user input form (`userInfoForm`) and the area for displaying results (`schemesOutput`).
        *   Input fields (`name`, `age`, `gender`, `occupation`) have `required` attributes and placeholders with `data-translate-placeholder`.
    *   `#testimonials`: Example user testimonials.
    *   `#developer-info`: Section to showcase developer details (avatar, name, bio, social links).
*   **Footer:** Includes copyright information, social media links, and a disclaimer.
*   **Script Inclusion:** Links to `script.js` at the end of the `<body>`.

### 2. `style.css`

*   **General Styles:** Basic styling for `body`, headings, paragraphs, and a container class.
*   **Color Scheme:** Uses a palette inspired by the Indian flag (Green: `#138808`, Saffron: `#FF9933`, White: `#FFFFFF`).
*   **Header Styling:** Styles for the logo, navigation, and language switcher.
*   **Section Styling:** Specific styles for each content section (`hero`, `stats`, `about`, `how-it-works`, `scheme-finder`, `testimonials`, `developer-info`, `footer`).
*   **Form Styling:** Styles for form elements, input fields, and buttons.
*   **Output Styling:** Styles for the `schemesOutput` area where results are displayed.
*   **Loader Animation:** CSS for the loading spinner.
*   **Responsive Design:** Uses `@media` queries to adjust layout and styling for different screen sizes (tablets and mobile phones).

### 3. `script.js`

*   **DOM Element Selection:** Selects necessary HTML elements using `document.getElementById()`.
*   **`translations` Object:** A large JavaScript object containing key-value pairs for all display text in multiple languages (HI, EN, BN, TA, TE, MR, GU, KN, ML).
    *   Keys like `page_title`, `nav_home`, `form_name_label`, `output_user_profile_title`, etc., are used.
*   **`localSchemesData` Array:**
    *   This is the **core dataset** of government schemes.
    *   Each scheme is an object with:
        *   `id`: A unique identifier.
        *   `name`: An object containing the scheme name in multiple languages.
        *   `description`: An object containing the scheme description in multiple languages.
        *   `eligibility`: An object defining the criteria:
            *   `minAge`, `maxAge`: Age range.
            *   `genders`: An array of eligible genders (e.g., `['महिला', 'Female']`). An empty array means all genders.
            *   `occupations`: An array of eligible occupations (e.g., `['किसान', 'Farmer']`). An empty array means all occupations.
*   **`setLanguage(lang)` Function:**
    *   Takes a language code (e.g., `'hi'`, `'en'`) as input.
    *   Selects all elements with `data-translate-key`, `data-translate-placeholder`, `data-translate-aria-label`, and `data-translate-alt`.
    *   Updates their `innerHTML`, `placeholder`, `aria-label`, or `alt` text based on the selected language from the `translations` object.
    *   Includes fallback to English if a translation key is missing in the selected language.
    *   Sets the `document.documentElement.lang` attribute.
    *   Saves the selected language to `localStorage`.
*   **Language Switcher Event Listener:**
    *   Attaches an event listener to the language switcher dropdown.
    *   Calls `setLanguage()` when the selection changes.
*   **`DOMContentLoaded` Event Listener:**
    *   Loads the saved language from `localStorage` or defaults to Hindi.
    *   Calls `setLanguage()` to apply the initial language.
    *   Calls `animateCounters()` to activate statistic animations.
    *   Sets developer-specific information (avatar, portfolio, social links). Developer name and bio are set via translation keys.
*   **`findLocalSchemes(userInfo, language)` Function:**
    *   This is the **rule-based matching engine**.
    *   Takes `userInfo` (name, age, gender, occupation) and the current `language` as input.
    *   Filters the `localSchemesData` array:
        *   Checks if `userAge` falls within the scheme's `minAge` and `maxAge`.
        *   Checks if `userGender` is present in the scheme's `eligibility.genders` array (or if the array is empty).
        *   Checks if `userOccupation` is present in the scheme's `eligibility.occupations` array (or if the array is empty).
    *   Formats the output string for display:
        *   Creates a "User Profile" section with translated labels and user data.
        *   Creates an "Eligible Government Schemes" section.
        *   Displays up to 6 matching schemes with their names and descriptions in the selected language.
        *   Adds a message if more than 6 schemes are found.
        *   Uses specific translation keys for output formatting (e.g., `output_user_profile_title`, `output_scheme_name_label`).
*   **Form Submission (`userInfoForm` Event Listener):**
    *   Prevents default form submission.
    *   Displays a loader and disables the submit button.
    *   Retrieves user input from the form.
    *   Calls `findLocalSchemes()` to get the matching schemes.
    *   Displays the formatted results in the `apiResponsePre` element.
    *   Hides the loader and re-enables the submit button.
    *   Scrolls the results into view.
*   **Smooth Scrolling:** Implements smooth scrolling for navigation links.
*   **`animateCounters()` Function:** Animates the numbers in the statistics section when they become visible on the screen using `IntersectionObserver`.

## Learnings & Takeaways

*   **Client-Side Logic:** This project demonstrates how complex conditional logic (like scheme matching) can be implemented purely on the client-side for simple to moderately sized datasets.
*   **Multilingual Implementation:** Managing translations via a JavaScript object and dynamically updating the DOM is a practical approach for SPAs.
*   **Data Structure Design:** Structuring the `localSchemesData` with nested objects for multilingual content and clear eligibility rules is crucial for the matching logic.
*   **DOM Manipulation:** Extensive use of JavaScript to interact with and update HTML elements based on user actions and data processing.
*   **User Experience:** Incorporating features like loading indicators, smooth scrolling, and responsive design enhances the user experience.
*   **Maintainability of Local Data:** For larger, more complex datasets, managing data directly in a JS array becomes less efficient. A real-world application would likely fetch this from a backend API or a dedicated JSON file.
*   **Simplified Eligibility:** The current eligibility criteria (age, gender, occupation) are simplified. Real government schemes have much more nuanced requirements (income, location, family size, etc.), which would require a more complex form and matching algorithm.

## Output Screenshots/GIFs

*(It's highly recommended to add a screenshot or a short GIF here showing the application in action, especially the form input and the scheme output.)*

**Example:**

**User Input Form:**
![User Input Form](https://github.com/AbhishekSinghShekhawatSDE/PragatiGPT/blob/701c39290aeea26741addf3a78d7a7ce7db24062/assets/Output.png) <!-- Replace with your actual screenshot path -->

**Scheme Results Output:**
![Scheme Results Output](https://github.com/AbhishekSinghShekhawatSDE/PragatiGPT/blob/701c39290aeea26741addf3a78d7a7ce7db24062/assets/Output_results.png) <!-- Replace with your actual screenshot path -->

**(Animated GIF showing the workflow would be even better!)**

## Live Demo

You can view a live demo of PragatiGPT here:
[https://your-github-username.github.io/pragatigpt/](https://abhisheksinghshekhawatsde.github.io/PragatiGPT) <!-- Replace with your actual GitHub Pages URL or other deployment URL -->

## How to Run Locally

1.  Clone the repository:
    ```bash
    git clone https://github.com/your-github-username/pragatigpt.git
    ```
2.  Navigate to the project directory:
    ```bash
    cd pragatigpt
    ```
3.  Open `index.html` in your web browser.

## Future Enhancements

*   Fetch scheme data from an external JSON file or a simple backend API for better maintainability.
*   Expand the scheme dataset with more schemes and more detailed eligibility criteria.
*   Add more complex filtering options (e.g., by state, income level - would require form changes).
*   Implement a search functionality for schemes.
*   Improve accessibility (ARIA attributes, keyboard navigation).

