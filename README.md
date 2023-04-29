# Moneyhub Tech Test - Property Details

This is a prototype of a new feature in Moneyhub
Customers will now be able to receive automatic value updates on their properties
and we would like to enhance the experience by summarizing their changes

Please read this whole document before starting

This prototype is built using NextJS and makes use of styled components

## Requirements

We would like you to:

----

**Required**: Add a "Valuation changes" section to the page. `design-mock-up.png` has been provided as a design reference for the page and `detail-design-mock-up.png` shows the specific feature to be added, including how it is styled responsively. Make use of existing fonts and styles to match the look and feel of the existing app rather than trying to match the mock up exactly.

 ```
  sincePurchase = `recentValuation - originalPurchasePrice`
  sincePurchasePercentage = `sincePurchase / originalPurchasePrice * 100`
  annualAppreciation =`sincePurchasePercentage / number of years since purchase`
  colours used for the positive change in the image are #c2f7e1 and #006b57
 ```

Consider what other data this component could take and how that might affect your theming and solution

Consider opportunities to reduce repetition in the code and increase legibility
- This could be creating new components, simplifying existing ones, extracting helper function to simplify code or styling
- Show us what you can do and implement a few of these if you have time

We also ask that you update the readme with answers to the following questions 

1. Given more time, what other changes you would have liked to make? 

##### Ewa's Answer:

     - Move each section to a separate section component, like I did for e.g. valuation.js; With a small app like this, it doesn't seem like an issue to have it all the way it is currently, but when it grows it will become more and more complex and confusing to have one big component, and will be easier to manage & maintain separate sections (and will also help avoid conflicts when multiple devs work on the same page, for example)
     - I know it is a choice to have all styled components in one file, so I tried to follow that pattern, however, when the application becomes bigger, it will become more diffiuclt to maintain these components, for the same reasons as above, and I'd probably suggest moving the styled components into their respective component files or folders
     - For this simple API data example this did not seem necessary, but in real life where there’s a lot of data, I would first transform/normalise the data by using models and putting that data through a model before using it in the components; this would involve flattening any nested objects and arrays, converting dates to a format they are required to be in etc; it would also allow any null or undefined values to be better handled if, e.g. they were made to have values of empty strings and thus would help avoid unexpected app crashes
     - Add tests to all components using react testing library & jest as well as axe for accessibility testing and snapshots in order to help catch any unexpected changes to the components  - I would add a test rendering the components; all this would help catch bugs and also give the developers more confidence in their code;
     - Use ESLint to make sure the style the code is in is consistent and also Prettier to enforce those rules
     - Make a content file where we would put everything that is displayed in each component so that the app could be easily translated into other languages
     - I'd also suggest having a src folder at the top and move components, helper-functions, modules, pages and styles into it

- Otherwise, I would possibly think of displaying 'status' on this component; I am not entirely sure what this data means, but I am assuming there is some scale which indicates how good the increase in property value is; this would be an interesting bit of info for the user;
- A bit of data that isn't currently in the API data, but would be interesting to the user is prediction for the future changes in value of the property;

2. What UX or design improvements or alterations might you suggest? These can be to existing components or completely new ideas.
##### Ewa's Answer:
     - Put in spinners for when data is loading
     - Add animations, or highlighting, e.g. on hover the RowContainer could be slightly highlighted
     - Clicking on the row container is not ideal - I would have a button for each of these making sure that the user knows they will navigate somewhere if they click it rather than it just happening  - also buttons will be better for accessibility
     - Add icons to where they make sense, e.g. to account list items so the information is more visually appealing
     - Add tooltips to give any explanations or additional information that may be useful for the user (e.g. what is appreciation? Not everyone might know that terminology)
     - Offer a dark mode version for better user experience/accessibility
     - Add responsive design e.g. for different screen sizes, by adding media queries to styles
----

**Optional**: If you have time, show us some more by fetching the data from the api
  - Currently the property data is hardcoded in the component, but it is also avaible via a Next.js api route
  - Details of a property are located in the API at `/api/account`, use this endpoint to populate the app with data
  - Use whichever method or library you are comfortable with to fetch the data

----

Try to:

- Ensure markup is semantic and accessible
- Make use of a centralised theme
- Make effective use of Git

We prefer:

- Functional React components
- `styled-components` for styling
- `prop-types` for typechecking

----

**IMPORTANT**

Most of your work should take place inside the `components/` and `modules/` directory. There are some example components and styles available and the theme is defined in `theme/`. This task has been mocked up in Next.js to provide a full working environment and as such shouldn't be taken as a _complete_ application. We are interested in assessing your React frontend skills and are not testing your knowledge of Next.js, you should not need to make any changes in the `pages/` directory.

### Notes

We recommend working through the list of requirements above but don't expect you to finish all of them. We're more interested in seeing how you approach the problem than seeing a perfect example, please only spend a few hours working on it. 

On completion, email a link to your repository to your contact at Moneyhub, and ensure it is publicly accessible.

## Getting Started

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3333](http://localhost:3333) with your browser to see the result.

You can start by looking at `modules/property-details/index`. The page auto-updates as you edit the file.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.
