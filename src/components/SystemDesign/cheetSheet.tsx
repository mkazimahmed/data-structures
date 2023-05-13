import * as React from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionItem,
  AccordionPanel,
  AccordionToggleEventHandler,
} from "@fluentui/react-components";

export default function CheetSheet() {
  return (
    <div className="App">
      <Accordion multiple>
        <AccordionItem value={1}>
          <AccordionHeader as="h2">Requirements Gathering</AccordionHeader>
          <AccordionPanel>
            <div className="accordion-body">
              <h4>What are the core features supported?</h4>
              <h4>What kind of input is supported? text, image-based.. etc</h4>
              <h4>
                What kind of pagination is supported? Page based or Infinite
                Scroll?
              </h4>
              <h4>
                What devices/platforms (desktop/tablet/mobile) need to be
                supported?
              </h4>
              <h4>Is offh4ne support necessary?</h4>
              <h4>Who are the main users of the product?</h4>
              <h4>
                What are the performance requirements, if any? (Performance
                requirements typically fall under non-functional requirements.)
              </h4>
              <h4>
                Is the component is generic enough to be usable by different
                websites?
              </h4>
              <h4>Do we need to support fuzzy search?</h4>
              <h4>Localization, internationalization</h4>
            </div>
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem value={2}>
          <AccordionHeader as={"h2"}>
            Architecture / High Level Design
          </AccordionHeader>
          <AccordionPanel>
            <div className="accordion-body">
              <h4>Page component</h4>
              <h4>Sub components</h4>
              <h4>Shared components</h4>
              <h4>Higher order components</h4>
              <h4>Input/Composer (WYSIWYG)</h4>
              <h4>Controller</h4>
              <h4>Cache</h4>
              <ul>
                <li>Initial results</li>
                <li>Cached results</li>
              </ul>
              <h4>Client DB</h4>
              <p>
                <b>Server:</b> Provides HTTP APIs to fetch feed posts and to
                create new feed posts.
              </p>
              <p>
                <b>Controller:</b> Controls the flow of data within the
                application and makes network requests to the server.
              </p>
              <p>
                <b>Client Store :</b> Stores data needed across the whole
                application. In the context of a news feed, most of the data in
                the store will be server-originated data needed by the feed UI.
              </p>
            </div>
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem value={30}>
          <AccordionHeader as={"h2"}>Data Model</AccordionHeader>
          <AccordionPanel>
            <div className="accordion-body">
              <h4>Props</h4>
              <h4>Client State</h4>
              <h4>Redux</h4>
              <h4>Data Provider</h4>
              <h4>Normalized Store</h4>
              <h4>Request</h4>
              <h4>Response</h4>

              <p>
                All server-originated data can be stored in the client store and
                queried by the components which need them.
              </p>
              <p>
                The shape of the client store is not particularly important
                here, as long as it is in a format that can be easily retrieved
                from the components. New data fetched from the second page
                should be joined with the previous data into a single list with
                the pagination parameters (cursor) updated.
              </p>

              <h4>Advanced: Normalized Store</h4>
              <p>
                Both Facebook and Twitter use a normalized client side store. If
                the term "normalized" is new to you, have a read of Redux's
                documentation on normalizing state shape. In a nutshell,
                normalized data stores:
              </p>

              <p>
                Resemble databases where each type of data is stored in its own
                table.
              </p>
              <p>
                Each item has a unique ID. References across data types use IDs
                (like a foreign key) instead of having nested objects. Facebook
                uses Relay (which can normalize the data by virtue of knowing
                the GraphQL schema) while Twitter uses Redux as seen from the
                "Dissecting Twitter's Redux Store" blog post.
              </p>

              <p>The benefits of having a normalized store are:</p>

              <p>
                <ul>
                  <li>
                    Reduce duplicated data and have a source of truth for the
                    same piece of data that could be presented in multiple
                    instances on the UI. E.g. if many posts are by the same
                    author, we're storing duplicated data for the author field
                    in the client store.
                  </li>
                  <li>
                    Easily update all data for the same entity. In the scenario
                    that the feed post contains many posts authored by the user
                    and the user changes their name, it'd be good to be able to
                    immediately reflect the updated author name in the posts.
                    This will be easier to do with a normalized store than a
                    store that just stores the server response verbatim.
                  </li>
                </ul>
                In the context of an interview, we don't really need to use a
                normalized store for a news feed because:
              </p>

              <p>
                With the exception of the user/author fields, there isn't much
                duplicated data. News feed is mostly for consuming information,
                there aren't many use cases to update data. Feed user
                interactions such as liking only affect data within a feed post.
                Hence the upsides of using a normalized store is limited. In
                reality, Facebook and Twitter websites contain other features,
                so a normalized store is useful in reducing storing of duplicate
                data and provides the ease of making updates.
              </p>

              <p>
                Further reading: Making Instagram.com faster: Part 3 — cache
                first
              </p>
            </div>
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem value={4}>
          <AccordionHeader as={"h2"}>
            Interface Definition - Basic Component API (Input props), Advanced
            API, Server API,
          </AccordionHeader>
          <AccordionPanel>
            <div className="accordion-body">
              <h4>Basic Component API (Input props)</h4>

              <ul>
                <li>
                  <b>Number of results:</b> The number of results to show in the
                  list of results.
                </li>
                <li>
                  <b>API URL: </b>The URL to hit when a query is made.
                </li>
                <li>
                  {" "}
                  <b>Event listeners: </b>'input', 'focus', 'blur', 'change',
                  'select' are some of the common events which developers might
                  want to respond to (possibly log user interactions), so adding
                  hooks for these events would be helpful.
                </li>
                <li>
                  <b>Theming options object:</b> This approach is the easiest to
                  use but the least flexible/customizable. The component can
                  accept an object of key/values (e.g.{" "}
                  {`{ textSize: 12px, textColor: 'red' })`} and use it when
                  rendering.
                </li>
                <li>
                  <b>Classnames:</b> Allow developers to specify their own CSS
                  class names which the component will add to the various UI
                  sub-components.
                </li>
                <li>
                  <b>Render function/callback:</b> This is an inversion of
                  control technique commonly used in React where the rendering
                  is completely left to the developer. The component invokes a
                  developer-provided function with some data and the developer
                  can customize the logic/code to render the UI based on that
                  data. This is the most flexible approach but requires the most
                  effort from the developer.
                </li>
              </ul>

              <h4>Advanced API</h4>

              <ul>
                <li>
                  <b>Minimum query length: </b>There will likely be too many
                  irrelevant results if the user query is too short as it is not
                  specific enough. We might only want to trigger the search when
                  there's a minimum number of characters typed in, possibly 3 or
                  more.
                </li>
                <li>
                  <b>Debounce duration: </b>Triggering a back end search API for
                  every keystroke can be quite wasteful, especially when the
                  queries for the first few characters are likely to not be
                  meaningful. Debouncing is a technique that limits the number
                  of time a function gets called. We could debounce hitting of
                  the API so that the server does not get hit too often. With a
                  debounce duration of 300ms, the back end search API will only
                  be called after there has been no user input for 300ms.
                </li>
                <li>
                  <b>API timeout duration:</b> How long we should be waiting for
                  a response to determine that the search has timed out and we
                  can display an error.
                </li>
                <li>
                  <b>Cache-related: </b>More details on these options will be
                  covered in the cache section below. Initial results Results
                  source: network only/network and cache/cache only Function to
                  merge results from server and cache Cache duration
                </li>
              </ul>
              <h4>Server API</h4>
              <ul>
                <li>GET Data</li>
                <li>POST Data</li>
                <li>PUT Data</li>
                <li>DELETE Data</li>
                <li>Pagination </li>
              </ul>

              <p></p>
            </div>
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem value={19}>
          <AccordionHeader as={"h2"}>Pagination - Methods</AccordionHeader>
          <AccordionPanel>
            <div className="accordion-body">
              <h4>Offset based</h4>
              <p>
                An offset-based pagination API accepts the following parameters:{" "}
                {`size, page`}
              </p>
              <p>
                Given 20 items in a feed, parameters of {`{size: 5, page: 2}`}{" "}
                will return items 6 - 10 along with pagination metadata:
              </p>
              <p>
                underlying SQL query:{" "}
                <pre>SELECT * FROM posts LIMIT 5 OFFSET 0;</pre>
              </p>
              <h5>Advantages</h5>
              <ul>
                <li>Users can jump to a specific page.</li>
                <li>Easy to see the total number of pages.</li>
                <li>
                  Easy to implement on the back end. The offset for a SQL query
                  is calculated using (page - 1) * size.
                </li>
              </ul>
              <h5>Disadvantages</h5>
              <ul>
                <li>
                  For data that updates frequently, the current page window
                  might be inaccurate after some time. Imagine a user has
                  fetched the first 5 posts in your feed. After sometime, 5 more
                  posts were added. If the users scroll to the bottom of the
                  feed and fetches page 2, the same posts in the original page 1
                  will be fetched, and the user will see duplicate posts.
                </li>
                <li>
                  you cannot change the page size for subsequent queries since
                  the offset is a product of the page size and the page being
                  requested..
                </li>
                <li>
                  query performance degrades as the table becomes larger. For
                  huge offsets (e.g. OFFSET 1000000) the database still has to
                  read up to those count + offset rows, discard the offset rows
                  and only return the count rows, which results in very poor
                  query performance for large offsets. This is back end
                  knowledge but it's useful to know and you get brownie points
                  for mentioning it.
                </li>
              </ul>
              <h4>Cursor Pagination based</h4>
              <p>
                Cursor-based pagination works by returning a pointer/position (a
                cursor) to the last item in the results. On subsequent queries,
                the server passes the cursor to the database, and the database
                knows to return items after that cursor.
              </p>
              <p>
                This avoids the inaccurate page window problem because new posts
                added over time do not affect the offset, which is determined by
                a fixed cursor.
              </p>
              <p>
                A cursor-based pagination API accepts the following parameters:
                {`size, cursor`}
              </p>
              <h5>Disadvantages</h5>
              <ul>
                <li>
                  It's not possible to jump to specific pages with cursors.
                </li>
                <li>
                  In order for the back end to implement cursor-based
                  pagination, the database needs to uniquely map the cursor to a
                  row, which can be done using a database table's primary key.
                </li>
                <li></li>
              </ul>
            </div>
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem value={13}>
          <AccordionHeader as={"h2"}>
            Pagination Infinite Scrolling
          </AccordionHeader>
          <AccordionPanel>
            <div className="accordion-body">
              <p>
                Infinite scrolling/feed works by fetching the next set of posts
                when the user has scrolled to the end of their current loaded
                feed. This results in the user seeing a loading indicator and a
                short delay where the user has to wait for the new posts to be
                fetched and displayed.
              </p>
              <p>
                A way to reduce or entirely eliminate the waiting time is to
                load the next set of feed posts before the user hits the bottom
                of the page so that the user never has to see any loading
                indicators. A trigger distance of around one viewport height
                should be sufficient for most cases. The ideal distance is short
                enough to avoid false positives and wasted bandwidth but also
                wide enough to load the rest of the contents before the user
                scrolls to the bottom of the page.
              </p>
              <p>
                A dynamic distance can be calculated based on the network
                connection speed and how fast the user is scrolling through the
                feed.
              </p>
              <h4>Implementing Infinite Scroll:</h4>
              <p>
                In both approaches, we add a marker element that is rendered at
                the bottom of the feed.
              </p>
              <ul>
                <li>
                  Add a scroll event listener (ideally debounced) to the page or
                  a timer (via setInterval) that checks whether the position of
                  the marker element is within a certain threshold from the
                  bottom of the page. The position of the marker element can be
                  obtained using Element.getBoundingClientRect.
                </li>
                <li>
                  Use the Intersection Observer API to monitor when the marker
                  element is entering or exiting another element or intersecting
                  by a specified amount.
                  <p>
                    <i>
                      The Intersection Observer API lets code register a
                      callback function that is executed whenever an element
                      they wish to monitor enters or exits another element (or
                      the viewport), or when the amount by which the two
                      intersect changes by a requested amount. This way, sites
                      no longer need to do anything on the main thread to watch
                      for this kind of element intersection, and the browser is
                      free to optimize the management of intersections as it
                      sees fit.
                    </i>
                  </p>
                </li>
              </ul>
              <h4>Virtualized lists</h4>
              <p>
                With infinite scrolling, all the loaded feed items are on one
                single page. As the user scrolls further down the page, more
                posts are appended to the DOM and with feed posts having complex
                DOM structure (lots of details to render), the DOM size rapidly
                increases. As social media websites are long-lived applications
                (especially if single-page app) and the feed items list can
                easily grow really long quickly, the number of feed items can be
                a cause of performance issues in terms of DOM size, rendering,
                and browser memory usage.
              </p>
              <p>
                Virtualized lists is a technique to render only the posts that
                are within the viewport. In practice, Facebook replaces the
                contents of off-screen feed posts with empty {`<div>s`}, add
                dynamically calculated inline styles (e.g. style="height:
                300px") to set the height of the posts so as to preserve the
                scroll position and add the hidden attribute to them. This will
                improve rendering performance in terms of:
              </p>
              <ul>
                <li>
                  <b>Browser painting:</b> Fewer DOM nodes to render and fewer
                  layout computations to be made.
                </li>
                <li>
                  <b>Virtual DOM reconciliation (React-specific):</b> Since the
                  post is now a simpler empty version, it's easier for React
                  (the UI library that Facebook is using to render the feed) to
                  diff the virtual DOM vs the real DOM to determine what DOM
                  updates have to be made.
                </li>
              </ul>

              <h4> Dynamic Loading Count</h4>
              <p>
                As mentioned above in the "Interface" section, cursor-based
                pagination is more suitable for a news feed. A benefit of
                cursor-based pagination is that you can change how many items to
                fetch in subsequent calls. We can use this to our advantage by
                customizing the number of posts to load based on the browser
                window height.
              </p>

              <p>
                For the initial load, we do not know the window height so we
                need to be conservative and overfetch the number of posts
                needed. But for subsequent fetches, we know the browser window
                height and can customize the number of posts to fetch based on
                that.
              </p>

              <h4>Preserving Feed Scroll Position</h4>
              <p>
                Feed scroll positions should be preserved if users navigate to
                another page and back to the feed. This can be achieved in SPAs
                if the feed posts are cached within the client store along with
                the scroll position and displayed with that scroll position when
                the user goes back to the feed page.
              </p>
            </div>
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem value={12}>
          <AccordionHeader as={"h2"}>
            Performance - Rendering Approach
          </AccordionHeader>
          <AccordionPanel>
            <div className="accordion-body">
              <h4>Server-side rendering (SSR)</h4>
              <p>
                Rendering the HTML on the server side, which is the most
                traditional way. Best for static content that require SEO and
                does not require heavy user interaction. Websites like blogs,
                documentation sites, e-commerce websites are built using SSR.
              </p>
              <h4>Client-side rendering (CSR)</h4>
              <p>
                Rendering in the browser, by dynamically adding DOM elements
                into the page using JavaScript. Best for interactive content.
                Applications like dashboards, chat apps are built using CSR.
              </p>
              <h4>Hybrid</h4>
              <p>
                A hybrid approach which gives the best of both worlds: a fast
                initial load with SSR then hydrating the page to enable
                interactions. Subsequent content will be rendered via CSR.
              </p>
              <p>
                Modern UI JavaScript frameworks like React and Vue, along with
                meta frameworks like Next.js and Nuxt enable this.
              </p>
            </div>
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem value={14}>
          <AccordionHeader as={"h2"}>
            Performance - Code Splitting JavaScript for Faster Performance
          </AccordionHeader>
          <AccordionPanel>
            <div className="accordion-body">
              <p>
                As an application grows, the number of pages and features
                increase which will result in more JavaScript and CSS code
                needed to run the application. Code splitting is a technique to
                split code needed on a page into separate files so that they can
                be loaded in parallel or when they're needed.
              </p>
              <p>Generally, code splitting can be done on two levels:</p>
              <ul>
                <li>
                  <b>Split on the page level:</b> Each page will only load the
                  JavaScript and CSS needed on that page.
                </li>
                <li>
                  <b>Lazy loading resources within a page: </b>Load non-critical
                  resources only when needed or after the initial render, such
                  as code that's only needed lower down on the page, or code
                  that's used only when interacted with (e.g. modals, dialogs).
                </li>
              </ul>

              <p>
                For reference, Facebook splits their JavaScript loading into 3
                tiers:
              </p>

              <ul>
                <li>
                  <b>Tier 1: </b>Basic layout needed to display the first paint
                  for the above-the-fold content, including UI skeletons for
                  initial loading states.
                </li>
                <li>
                  <b>Tier 2: </b> JavaScript needed to fully render all
                  above-the-fold content. After Tier 2, nothing on the screen
                  should still be visually changing as a result of code loading.
                </li>
                <li>
                  <b>Tier 3: </b> Resources that are only needed after display
                  that doesn't affect the current pixels on the screen,
                  including logging code and subscriptions for live-updating
                  data.
                </li>
              </ul>
            </div>
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem value={22}>
          <AccordionHeader as={"h2"}>
            Performance - Lazy load code that is not needed for initial render
          </AccordionHeader>
          <AccordionPanel>
            <div className="accordion-body">
              <p>
                Many interactions with a feed post are not needed on initial
                render:
              </p>

              <ul>
                <li>Reactions popover.</li>
                <li>
                  Dropdown menu revealed by the top-right ellipsis icon button,
                  which is usually meant to conceal additional actions.
                </li>
              </ul>

              <p>The code for these components can be downloaded when:</p>

              <ul>
                <li>The browser is idle as a lower-priority task.</li>
                <li>
                  On demand, when the user hovers over the buttons or clicks on
                  them.
                </li>
              </ul>
            </div>
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem value={18}>
          <AccordionHeader as={"h2"}>
            Performance - Delivering Data-driven Dependencies Only When Needed
          </AccordionHeader>
          <AccordionPanel>
            <div className="accordion-body">
              <p>
                Data can come in many different formats and require specialized
                rendering code but not all users will see all of them. One way
                to achieve this is to have the client load the component
                JavaScript code for all possible formats upfront so that any
                kind of feed post format can be rendered. However, this will
                quickly bloat the page's JavaScript size and there will likely
                be a lot of unused JavaScript.
              </p>
              <p>
                Facebook fetches data from the server using Relay, which is a
                JavaScript-based GraphQL client. Relay couples React components
                with GraphQL to allow React components to declare exactly which
                data fields are needed and Relay will fetch them via GraphQL and
                provide the components with data.
              </p>

              <p>
                Relay has a feature called data-driven dependencies which
                delivers component code along with the respective type of data,
                effectively solving the problem mentioned above. You only load
                the relevant code when a particular format for a post is being
                shown.
              </p>
              <pre>{`... on Post {
                      ... on TextPost {
                        @module('TextComponent.js')
                        contents
                      }
                      ... on ImagePost {
                        @module('ImageComponent.js')
                        image_data {
                          alt
                          dimensions
                        }
                      }
                  `}</pre>

              <p>
                The above GraphQL query tells the back end to return the
                TextComponent JavaScript code along with the text contents if
                the post is a text-based post and return the ImageComponent
                JavaScript code along with the image data if the post has image
                attachments. There's no need for the client to load component
                JavaScript code for all the possible post formats upfront,
                reducing the initial JavaScript needed on the page.
              </p>
            </div>
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem value={21}>
          <AccordionHeader as={"h2"}>
            Performance - Rendering Images
          </AccordionHeader>
          <AccordionPanel>
            <div className="accordion-body">
              <p>
                Since there can be images in a feed post, we can also briefly
                discuss some image optimization techniques:
              </p>
              <ul>
                <li>
                  Use a Content Delivery Network (CDN) to host and serve images
                  for faster loading performance.
                </li>
                <li>
                  Use modern image formats such as WebP which provides superior
                  lossless and lossy image compression.
                </li>
                <li>
                  {`<img>`}s should use proper alt text. Facebook provides alt
                  text for user-uploaded images by using Machine Learning and
                  Computer Vision to process the images and generate a
                  description.
                </li>
                <li>
                  Image loading based on device screen properties
                  <ul>
                    <li>
                      Send the browser dimensions in the initial request (or
                      subsequent is also fine) and server can decide what image
                      size to return.
                    </li>
                    <li>
                      Use srcset if there are image processing (resizing)
                      capabilities to load the most suitable image file for the
                      current viewport.
                    </li>
                  </ul>
                </li>
                <li>
                  Adaptive image loading based on network speed
                  <ul>
                    <li>
                      <b> Devices with good internet connectivity/on WiFi:</b>
                      Prefetch offscreen images that are not in the viewport yet
                      but about to enter viewport.
                    </li>
                    <li>
                      <b>Poor internet connection:</b> Render a low-resolution
                      placeholder image and require users to explicitly click on
                      them to load the high-resolution image.
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem value={15}>
          <AccordionHeader as={"h2"}>
            User Experience - Keyboard Shortcuts
          </AccordionHeader>
          <AccordionPanel>
            <div className="accordion-body">
              <p>
                Add specific shortcuts to help users navigate between the
                components and perform common actions, super handy!
              </p>
            </div>
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem value={16}>
          <AccordionHeader as={"h2"}>
            User Experience - Loading Indicators
          </AccordionHeader>
          <AccordionPanel>
            <div className="accordion-body">
              <p>
                For users who scroll really fast, even though the browser kicks
                off the request for the next set of data before the user even
                reaches the bottom of the page, the request might not have
                returned yet and a loading indicator should be shown to reflect
                the request status.
              </p>
              <p>
                Rather than showing a spinner, a better experience would be to
                use a shimmer loading effect which resembles the contents of the
                posts. This looks more aesthetically pleasing and can be used
                also reduce layout thrash after the new posts are loaded.
              </p>
            </div>
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem value={17}>
          <AccordionHeader as={"h2"}>
            User Experience Error States
          </AccordionHeader>
          <AccordionPanel>
            <div className="accordion-body">
              <p>
                Clearly display error states if the list failed to fetch, or
                when there's no network connectivity.
              </p>
            </div>
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem value={6}>
          <AccordionHeader as={"h2"}>User Experience - Others</AccordionHeader>
          <AccordionPanel>
            <div className="accordion-body">
              <h4>No network</h4>
              <h4>See more</h4>
              <h4>Easy to ready numbers</h4>
              <h4>Autofocus</h4>
              <h4>
                Handle long strings
                <div className="accordion-body">
                  <h4>Truncate, elh4psis</h4>
                </div>
              </h4>

              <h4>
                Timestamp rendering
                <div className="accordion-body">
                  <h4>Server</h4>
                  <h4>Client</h4>
                  <h4>Intl.DateTimeFormat</h4>
                </div>
              </h4>
              <h4>Relative timestamps</h4>
              <h4>Icon Rendering</h4>
              <h4>Stale Data</h4>
              <h4>WYSIWYG (What you see is what you get)</h4>
            </div>
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem value={20}>
          <AccordionHeader as={"h2"}>
            Rendering Mentions/Hashtags{" "}
          </AccordionHeader>
          <AccordionPanel>
            <div className="accordion-body">
              <h4>HTML Format</h4>
              <p>
                The simplest format is HTML, you store the message the way you
                want it to be displayed.
              </p>
              <pre>
                <a href="...">#AboutLastNight</a> is here... and ready to change
                the meaning of date night... Absolute comedy 🤣 Dropping 2/10 on{" "}
                <a href="...">HBO Max</a>!
              </pre>
              <p>
                Storing as HTML is usually bad because there's a potential for
                causing a Cross-Site Scripting (XSS) vulnerability. Also, in
                most cases it's better to decouple the message's metadata from
                displaying, perhaps in future you want to decorate the
                mentions/hashtags before rendering and want to add classnames to
                the links. HTML format also makes the API less reusable on
                non-web clients (e.g. iOS/Android).
              </p>
              <h4>Custom Syntax</h4>
              <p>
                A custom syntax can be used to capture metadata about hashtags
                and mentions.
              </p>

              <ul>
                <li>
                  <b>Hashtags: </b>Hashtags don't actually need a special
                  syntax, words that start with a "#" can be considered a
                  hashtag.
                </li>
                <li>
                  <b>Mentions:</b> A syntax like [[#1234: HBO Max]] is
                  sufficient to capture the entity ID and the text to display.
                  It's not sufficient to just store the entity ID because sites
                  like Facebook allow users to customize the text within the
                  mention.
                </li>
              </ul>
              <p>
                Before rendering the message, the string can be parsed for
                hashtags and mentions using regex and replaced with
                custom-styled links. Custom syntax is a lightweight solution
                which is safe yet robust enough if you know beforehand that
                there will not be new kinds of rich text entities to render in
                future.
              </p>

              <h4>Popular Rich Text Editor Format</h4>
              <p>
                Draft.js is a popular rich text editor by Facebook for composing
                rich text. Draft.js allows users to extend the functionality and
                create their own rich text entities such as hashtags and
                mentions. It defines its a custom Draft.js editor state format
                which is being used by the Draft.js editor.
              </p>

              <p>
                Draft.js is just one example of a rich text format, there are
                many out there to choose from. The editor state resembles an
                Abstract Syntax Tree and can be serialized into a JSON string to
                be stored. The benefits of using a popular rich text format is
                that you don't have to write custom parsing code and can easily
                extend to more types of rich text entities in future. However,
                these formats tend to be longer strings than a custom syntax
                version and will result in larger network payload size and
                require more disk space to store.
              </p>

              <p>
                An example of how the post above can be represented in Draft.js.
              </p>

              <pre>
                {`
                {
                  content: [
                    {
                      type: 'HASHTAG',
                      content: '#AboutLastNight',
                    },
                    {
                      type: 'TEXT',
                      content: ' is here... and ready to change ... Dropping 2/10 on ',
                    },
                    {
                      type: 'MENTION',
                      content: 'HBO Max',
                      entityID: 1234,
                    },
                    {
                      type: 'TEXT',
                      content: '!',
                    },
                  ];
                }
                `}
              </pre>
            </div>
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem value={8}>
          <AccordionHeader as={"h2"}>Performance</AccordionHeader>
          <AccordionPanel>
            <div className="accordion-body">
              <h4>Server-side rendering (SSR)</h4>
              <p>
                Rendering the HTML on the server side, which is the most
                traditional way. Best for static content that require SEO and
                does not require heavy user interaction. Websites like blogs,
                documentation sites, e-commerce websites are built using SSR.
              </p>
              <h4>Client-side rendering (CSR)</h4>
              <p>
                Rendering in the browser, by dynamically adding DOM elements
                into the page using JavaScript. Best for interactive content.
                Applications like dashboards, chat apps are built using CSR.
              </p>
              <h4>Hybrid</h4>
              <p>
                A hybrid approach which gives the best of both worlds: a fast
                initial load with SSR then hydrating the page to enable
                interactions. Subsequent content will be rendered via CSR.
              </p>

              <h4>
                Code splitting
                <div className="accordion-body">
                  <h4>Sph4t page level</h4>
                  <h4>Lazy loading resources</h4>
                  <h4>
                    Lazy load the code that is not needed for initial render.
                    Second fold
                  </h4>
                </div>
              </h4>
              <h4>Rendering Images</h4>
              <h4>Optimistic Updates</h4>
              <h4>
                Offh4ne Usage
                <div className="accordion-body">
                  <h4>Read purely from the cache</h4>
                  <h4>Not fire any requests</h4>
                  <h4>Indicate no network connection</h4>
                </div>
              </h4>
              <h4>Loading speed</h4>
              <h4>Debounce throtth4ng</h4>
              <h4>Memory usage</h4>
              <h4>Deh4vering data driven JS dependencies</h4>
            </div>
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem value={5}>
          <AccordionHeader as={"h2"}>Network</AccordionHeader>
          <AccordionPanel>
            <div className="accordion-body">
              <h4>Handling concurrent requests/race conditions</h4>
              <p>
                What happens if the user makes changes to the query while
                there's a pending network request? If there are multiple pending
                network requests, we will need to be mindful not to display
                results for a previous search query. We cannot rely on the
                return order of network responses from the server because an
                earlier request might only be completed later than a request
                fired later on.
              </p>
              <p>
                To know which request's response we should use display, we
                could:
              </p>
              <ul>
                <li>
                  Attach a timestamp to each request to determine the latest
                  request and only display the results of the latest request
                  (not the latest response!). Discard the response of irrelevant
                  queries.
                </li>
                <li>
                  Save the results in an object/map, keyed by the search query
                  string and only present the results corresponding to the input
                  value in the search input.
                </li>
              </ul>
              <p>
                Which option is better? Given we have a cache that remembers the
                responses of each search query, option 2 is clearly better. We
                should not discard responses since the data is already given
                back to us anyway. Refer to the cache section below.
              </p>
              <h4>Failed requests and retries</h4>
              <p>
                Server requests can sometimes fail, possibly due to poor the
                user's flaky internet connection. The component can
                automatically retry firing the query. In case the server is
                indeed offline and we are concerned about overloading the
                server, we could use an exponential backoff strategy.
              </p>
              <h4>Offline usage</h4>
              <p>
                If we detect that the device has entirely lost network
                connection, there's not a whole lot that we can do since our
                component relies on the server for data. But we could do the
                following to improve the UX:
              </p>
              <ul>
                <li>
                  Read purely from cache. Obviously this is not very useful if
                  the cache is empty.
                </li>
                <li>Not fire any requests so as not to waste CPU cycles.</li>
                <li>
                  Indicate that there's no network connection somewhere in the
                  component.
                </li>
              </ul>
            </div>
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem value={7}>
          <AccordionHeader as={"h2"}>Accessibility</AccordionHeader>
          <AccordionPanel>
            <div className="accordion-body">
              <h4>Screen Readers</h4>

              <ul>
                <li>
                  Semantic HTML: Use semantic HTML or use the right aria roles
                  if using non-semantic HTML. Use {`<ul>, <li>`} for building
                  list items or role="listbox" and role="option".
                </li>
                <li>
                  ria-label for the {`<input>`} because there usually isn't a
                  visible label
                </li>
                <li>role="combobox" for the input.</li>
                <li>
                  aria-expanded to indicate whether the popup element is
                  currently displayed.
                </li>
                <li>
                  aria-autocomplete to describe the type of autocompletion
                  interaction model the combobox will use when dynamically
                  helping users complete text input, whether suggestions will be
                  shown as a single value inline
                </li>
                <li>
                  {" "}
                  aria-haspopup to indicate that the element can trigger an
                  interactive popup element.
                </li>
              </ul>

              <h4></h4>

              <h4>Aria-labelledby</h4>
              <h4>Aria-describedby</h4>
              <h4>Tabindex</h4>
              <h4>Aria-role</h4>
              <h4></h4>
            </div>
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem value={9}>
          <AccordionHeader as={"h2"}>Caching</AccordionHeader>
          <AccordionPanel>
            <div className="accordion-body">
              <h4>Cache Structure</h4>
              <p>
                The cache within the component is the most interesting aspect of
                the component as there are many ways to design the cache, each
                with its own pros and cons. Explaining the tradeoffs of each is
                essential to acing front end system design interviews.
              </p>
              <div>
                <h4>
                  1. Hash map with search query as key and results as value
                </h4>
                <p>
                  This is the most obvious structure for a cache, mapping the
                  string query to the results. Retrieving the results is super
                  simple and can be obtained in O(1) time just by looking up
                  whether the cache contains the search term as a key.
                </p>
                <pre>
                  {`
                    const cache = {
                      fa: [
                        { type: 'organization', text: 'Facebook' },
                        {
                          type: 'organization',
                          text: 'FasTrak',
                          subtitle: 'Government office, San Francisco, CA',
                        },
                        { type: 'text', text: 'face' },
                      ],
                      fac: [
                        { type: 'organization', text: 'Facebook' },
                        { type: 'text', text: 'face' },
                        { type: 'text', text: 'facebook messenger' },
                      ],
                      face: [
                        { type: 'organization', text: 'Facebook' },
                        { type: 'text', text: 'face' },
                        { type: 'text', text: 'facebook stock' },
                      ],
                      faces: [
                        { type: 'television', text: 'Faces of COVID', subtitle: 'TV program' },
                        { type: 'musician', text: 'Faces', subtitle: 'Rock band' },
                        { type: 'television', text: 'Faces of Death', subtitle: 'Film series' },
                      ],
                      // ...
                    };
                    `}
                </pre>
                <p>
                  However, see that there are lots of duplicate results
                  especially if we don't do any debouncing as the user is typing
                  and we fire one request per keystroke. This results in the
                  page consuming lots of memory for the cache.
                </p>

                <h4>2. List of results with own filtering </h4>
                <p>
                  Alternatively, we could save the results as a flat list and do
                  our own filtering on the front end. There will be not be much
                  duplication of results.
                </p>
                <pre>
                  {`
                    const results = [
                      { type: 'company', text: 'Facebook' },
                      {
                        type: 'organization',
                        text: 'FasTrak',
                        subtitle: 'Government office, San Francisco, CA',
                      },
                      { type: 'text', text: 'face' },
                      { type: 'text', text: 'facebook messenger' },
                      { type: 'text', text: 'facebook stock' },
                      { type: 'television', text: 'Faces of COVID', subtitle: 'TV program' },
                      { type: 'musician', text: 'Faces', subtitle: 'Rock band' },
                      { type: 'television', text: 'Faces of Death', subtitle: 'Film series' },
                    ];
                    `}
                </pre>
                <p>Not ideal to do client filtering and bad for performance</p>

                <h4>3.Normalized map of results - Long lived Websites</h4>
                <p>Fast look up and non-duplicated data</p>
                <pre>
                  {`
                  const results = {
                    1: { id: 1, type: 'organization', text: 'Facebook' },
                    2: {
                      id: 2,
                      type: 'organization',
                      text: 'FasTrak',
                      subtitle: 'Government office, San Francisco, CA',
                    },
                    3: { id: 3, type: 'text', text: 'face' },
                    4: { id: 4, type: 'text', text: 'facebook messenger' },
                    5: { id: 5, type: 'text', text: 'facebook stock' },
                    6: {
                      id: 6,
                      type: 'television',
                      text: 'Faces of COVID',
                      subtitle: 'TV program',
                    },
                    7: { id: 7, type: 'musician', text: 'Faces', subtitle: 'Rock band' },
                    8: {
                      id: 8,
                      type: 'television',
                      text: 'Faces of Death',
                      subtitle: 'Film series',
                    },
                  };
                  
                  const cache = {
                    fa: [1, 2, 3],
                    fac: [1, 3, 4],
                    face: [1, 3, 5],
                    faces: [6, 7, 8],
                    // ...
                  };
                  `}
                </pre>
              </div>

              <h4>Cache Strategy</h4>
              <p>
                Caching is a space/time tradeoff where we trade memory space to
                save on processing time. Having cached results stay around for
                too long is a bad idea because it consumes memory and if too
                much time has passed since the cache entry was written, the
                results are likely irrelevant/outdated. There's little value in
                using memory to store irrelevant/outdated results.
              </p>

              <p>When to evict the cache depends on the type of application:</p>
              <ul>
                <li>
                  Google: Google search results don't update that often, so the
                  cache is useful and can live for long (hours?).
                </li>
                <li>
                  Facebook: Facebook search results are updated moderately
                  often, so a cache is useful but entries should be evicted
                  every now and then (half an hour?).
                </li>
                <li>
                  Stock/currency exchanges: Exchanges with an autocomplete for
                  stock ticker symbols/currency showing the current price in the
                  results might not want to cache at all because the prices
                  change every minute when the markets are open.
                </li>
              </ul>
            </div>
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem value={10}>
          <AccordionHeader as={"h2"}>Storage</AccordionHeader>
          <AccordionPanel>
            <div className="accordion-body">
              <h4>Cookies 4kb per domain</h4>
              <h4>Local storage</h4>
              <h4>indexedDB</h4>
            </div>
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem value={24}>
          <AccordionHeader as={"h2"}>Optimistic Updates</AccordionHeader>
          <AccordionPanel>
            <div className="accordion-body">
              <p>
                Optimistic update is a performance technique where the client
                immediately reflect the updated state after a user interaction
                that hits the server and optimistically assume that the server
                request succeeds, which should be the case for most requests.
                This gives users instant feedback and improves the perceived
                performance. If the server request fails, we can revert the UI
                changes and display an error message.
              </p>
              <p>
                For a news feed, optimistic updates can be applied for reaction
                interactions by immediately showing the user's reaction and an
                updated total count of the reactions.
              </p>
              <p>
                Optimistic updates is a powerful feature built into modern query
                libraries like Relay, SWR and React Query.
              </p>
            </div>
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem value={25}>
          <AccordionHeader as={"h2"}>Timestamp Rendering</AccordionHeader>
          <AccordionPanel>
            <div className="accordion-body">
              <p>
                Timestamp rendering is a topic worth discussing because of a few
                issues: multilingual timestamps and stale relative timestamps.
              </p>
              <h4>Multilingual Timestamps</h4>
              <p>
                Globally popular sites like Facebook and Twitter have to ensure
                their UI works well for different languages. There are a few
                ways to support multilingual timestamps:
              </p>
              <ul>
                <li>
                  Server returns the raw timestamp and client renders in the
                  user's language. This approach is flexible but requires the
                  client to contain the grammar rules and translation strings
                  for different languages, which can amount to significant
                  JavaScript size depending on the number of supported
                  languages,
                </li>
                <li>
                  Server returns the translated timestamp. This requires
                  processing on the server, but you don't have to ship timestamp
                  formatting rules for various languages to the client. However,
                  you cannot update this timestamp on the client.
                </li>
                <li>
                  Modern browsers can leverage the Intl.DateTimeFormat() API to
                  transform a raw timestamp into a translated datetime string.
                </li>
              </ul>
              <h4>Relative Timestamps Can Become Stale</h4>
              <p>
                If timestamps are displayed using a relative format (e.g. 3
                minutes ago, 1 hour ago, 2 weeks ago, etc), recent timestamps
                can easily go stale especially for applications where users
                don't refresh the page. A timer can be used to constantly update
                the timestamps if they are recent (less than an hour old) such
                that any significant time that has passed will be reflected
                correctly.
              </p>
            </div>
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem value={31}>
          <AccordionHeader as={"h2"}>
            Mobile Friendliness / Responsiveness
          </AccordionHeader>
          <AccordionPanel>
            <div className="accordion-body">
              <h4>Alt</h4>
              <p></p>
              <ul>
                <li></li>
                <li></li>
                <li></li>
              </ul>
            </div>
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem value={33}>
          <AccordionHeader as={"h2"}>Query results positioning</AccordionHeader>
          <AccordionPanel>
            <div className="accordion-body">
              <h4>Cursor Position</h4>
              <pre>{`
                // Retrieve the text editor element
                const textEditor = document.getElementById('text-editor');
                
                // Add an event listener for the input event to detect changes in the text editor
                textEditor.addEventListener('input', () => {
                  // Retrieve the current selection range and position of the cursor
                  const selection = window.getSelection();
                  const cursorPosition = selection.anchorOffset;
                
                  // Retrieve the position and size of the text editor element
                  const editorPosition = textEditor.getBoundingClientRect();
                  const editorTop = editorPosition.top;
                  const editorLeft = editorPosition.left;
                
                  // Calculate the position of the cursor relative to the text editor
                  const cursorPositionX = editorLeft + selection.getRangeAt(0).getBoundingClientRect().x;
                  const cursorPositionY = editorTop + selection.getRangeAt(0).getBoundingClientRect().y;
                
                  // Print the position of the cursor to the console
                  console.log(Cursor position: (cursorPositionX, cursorPositionY)ß);
                });
              `}</pre>
              <h4>Popover Poistion</h4>
              <p></p>
              <ul>
                <li></li>
                <li></li>
                <li></li>
              </ul>
            </div>
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem value={35}>
          <AccordionHeader as={"h2"}>Form Optimizations</AccordionHeader>
          <AccordionPanel>
            <div className="accordion-body">
              <h4>Country Specific Forms</h4>
              <h4>Optimize Autofill</h4>
              <p></p>
              <ul>
                <li></li>
                <li></li>
                <li></li>
              </ul>
            </div>
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem value={35}>
          <AccordionHeader as={"h2"}>Security</AccordionHeader>
          <AccordionPanel>
            <div className="accordion-body">
              <p>
                Use HTTPS so that all communication with the server is encrypted
                and that other users on the same Wi-FI network cannot intercept
                and obtain any sensitive details.
              </p>
              <p>
                Payment details submission API should not be using HTTP GET
                because the sensitive details will be included as a query string
                in the request URL which will get added to the browsing history
                which is potentially unsafe if the browser is shared by other
                users. Use HTTP POST or PUT instead.
              </p>
            </div>
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem value={26}>
          <AccordionHeader as={"h2"}>Sample</AccordionHeader>
          <AccordionPanel>
            <div className="accordion-body">
              <h4>Alt</h4>
              <p></p>
              <ul>
                <li></li>
                <li></li>
                <li></li>
              </ul>
            </div>
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
