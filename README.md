# Introduction
This repo is for a course from the Minor: Everything Web called CSS To The Rescue.
The main goal of this course is to only use CSS selectors, meaning no classes, id's ect. and to make the components/site keyboard accessible.


Purpose:
Learn and explore more of CSS
Accessibility using keyboard

# The constrains
- No classes or id's to use for styling (Navigating with id  is ok)
- No JavaScript
- More...222222222

# Proces
The process and planning.


## Week 1
What I've done, learned and plan to do in week 1.
### What I've done
- Thinking out how each component will look like

- Trying to implement modals (not succeeded)
- Login modal base implemented

- Implementing from *CSS Secrets*
	- Fancy ampersand
	- De-emphasize by dimming
	- Instrinsic sizing (With max-content instead of min-content)

- Working on focus-within nested navigation

- Thinking about adding id's to the components/sections so that you can jump to a component right away without having to tab through everything.

### What I've learned
- The basics of CSS Grid with CssGridGarden:
[CssGridGarden](http://cssgridgarden.com/):
A quick and fun introduction to the new CSS module, CSS Grid. I've learned come in contact and learned the basic syntax of CSS Grid.

Wes Boss [CSS Grid course](https://cssgrid.io):
Learning more about CSS Grid's syntax and using it in practical sense.

- How to use some pseudo selectors like `:target`
- Css only modal
- How to focus within a nested navigation

### What to do/planned
- Adding a jump to content or something similiar
- Style and test each component one by one
- Create a cohesive concept
- Change the content

## Week 2
### What I've done
- Started all over, because I now got an idea what I want to make/do
- Started styling the component from scratch
- Added teeny animations
- Base for the *Home/Overview* page made
- Base for the *Account/Login* screen set

### What I've learned
- Learning to use keyframes
- Never heard about `:placeholder-shown` and `::-webkit-input-placeholder` before. Now I have 😉
- That you cannot create a masonry layout with `CSS Grid`. 😞

### What to do/planned

# Components

## Login
## Navigation
## Rating
## Chat
## Media Item
## Picture with Subtitle
## Step Indicator

Rating example makes use of Emoji from: http://emojione.com

### To be applied form the book **CSS Secrets from Lea Verou**

- [x] fancy ampersand - 5.25
In the header
- [ ] de-emphasize by dimming - 6.32
- [x] de-emphasize by blurring - 6.33 
The background when a card is selected - similar to 6.32
- [x] Instrinsic sizing (Styling by sibling count) -7.36, (7.38)
min-content and max-content incorporated into few components
- [ ] 7.40 Vertical centering
Had no need to vertically center something. What comes the closest is the card modal.

- [x] Frame by frame - Loading spinner — 8.43
The png sprite sheet loader added to mimic the loading of logging in. Shows when the *Stay logged in* checkbox is checked to mimic the loading
- [x] Elastic transition - Transitions op :hovers en :focus—8.42
On selecting a card. A modal will bounce in.
- [x] Picking the right Cursor — 6.29
Default on links and set on buttons
- [x] Extending the clickable area — 6.30
On nav links and link in the login page using transparent borders.
- [x] Custom checkboxes — 6.31
In the login form under account.html
- [x] (Pseudo)random background — 2.7
Set on the progressbar in /learn.html
