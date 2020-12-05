## Paprback

Paprback is a virtual bookshelf to manage all your readings. You can search for any book in the world and start building a shelf that you can showcase to the world.

You can visit the production app and start building your shelf at [alpha.paprback.co](https://alpha.paprback.co)

### Installation

Clone this repository. You will need `node` and `npm` installed globally on your machine. 

```jsx
$ git clone
$ cd paprback
$ npm install
$ npm run dev
```
This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

Once you've started the development server, open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

I've included the env variables in the `.env` file, they're just public endpoints anyways.  

## Contributing

There's a number of things that can be worked on! If you find any bugs, or any features you think you can add, feel free to do so. 

You can dive deeper into the Contributing file to learn more.

## Reflection

I've always wanted to push my development skills further, and complete a large project with a group of friends. This project taught me a ton about building from scratch and the number of decisions necessary to make to ensure it's scalable. I made tons of mistakes, and learned tons. I'd love to take this project further, but I realized it's extremely complex to do as the sole front-end developer and also not necessarily worth the time. I'd like to continue learning, and there's a couple other projects I'd like to build.

Goodreads has always been a pain point and I figured it would be the time to consider building something new. We got to the shelves part, but there's many nuances and UX cues that can be significantly improved.

Overall, I'm super happy I finally completed a project and learned so much in a short time. Excited to keep building. Here's a quick list of the React concepts I learned through this project. 

- Functional + Class Components, HOCs
- Props vs State
- Conditional Rendering
- Hooks + Custom Hooks
- Context
- Error Boundaries
- Compound Components
- State Management, Routing, Styling, so much more.. 
- I did not learn Testing yet

## Built With

As I was learning React, other than using the boilerplate `create-react-app` , I did everything from scratch to truly learn what's happening behind the scenes and how to correctly design a full-stack project. As I progressed and hit roadblocks, I rebuilt the project a couple times and then finally settled on my favourite resources to build react projects. I've listed them below. 

- [Next JS](https://nextjs.org/)
    - Next JS is absolutely amazing. It made things extremely simple and everything just worked ✨. I'd like to try it out with Supabase in the near future, or directly connected to MongoDB. It's undoubtedly the best developer experience you can ask for.
- [Chakra UI](https://chakra-ui.com/)
    - Originally, I used `theme-ui` but I had to build a number of components myself and wanted something simpler for the time being. Chakra UI 1.0 was a much better experience with a great community. There's a number of components, animations and features built in, and provides full flexibility for you to own the styling.
- [SWR by Vercel](https://swr.vercel.app/)
- [React Hook Form](https://react-hook-form.com/)
    - At first, I built most form validation features myself to learn – but wow, I did not know how complex it is. To avoid redundancies, I enjoyed using `react-hook-form` as a library.

The backend was built in Ruby by my friend PJ which you can checkout here 👉 [Paprback Backend](https://github.com/poujacques/bookclub-backend).

## Resources

Learning how to code can be overwhelming! Everyone has different styles of learning and diffrent things that click with them. Personally, I learn best through videos, examples and code alongs. I've shared some of the resources I used below. I also went on numerous random blogs for random issues, and asked questions within a number of Discord groups. 

*Courses*

- [React Docs](https://reactjs.org/docs/getting-started.html)
- [Scrimba](https://scrimba.com/)
    - You get to code-along within an IDE / Video style format, it's really neat and Bob Ziroll is a great teacher.
- [React 2025](https://react2025.com/)
    - Huge vouch for this. Lee Robinson is absolutely amazing and super helpful. His way of teaching really stuck with me and it helped me understand concepts that no other course was able to.
- [React Security Fundamentals](https://reactsecurity.io/)
- [React Hooks by Codevolution](https://www.youtube.com/watch?v=cF2lQ_gZeA8&list=PLC3y8-rFHvwisvxhZ135pogtX7_Oe3Q3A&ab_channel=Codevolution)
