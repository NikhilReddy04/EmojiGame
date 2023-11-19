In this project, let's build an **Emoji Game** by applying the concepts we have learned till now.

### Refer to the image below:

<br/>
<div style="text-align: center;">
    <img src="https://assets.ccbp.in/frontend/content/react-js/emoji-game-output-v2.gif" alt="emoji-game-output" style="max-width:70%;box-shadow:0 2.8px 2.2px rgba(0, 0, 0, 0.12)">
</div>
<br/>

### Design Files

<details>
<summary>Click to view</summary>

- [Extra Small (Size < 576px), Small (Size >= 576px)](https://assets.ccbp.in/frontend/content/react-js/emoji-game-sm-outputs.png)
- [Medium (Size >= 768px), Large (Size >= 992px) and Extra Large (Size >= 1200px) - Game View](https://assets.ccbp.in/frontend/content/react-js/emoji-game-lg-output-v2.png)
- [Medium (Size >= 768px), Large (Size >= 992px) and Extra Large (Size >= 1200px) - Won Game](https://assets.ccbp.in/frontend/content/react-js/emoji-game-won-game-lg-output.png)
- [Medium (Size >= 768px), Large (Size >= 992px) and Extra Large (Size >= 1200px) - Lose Game](https://assets.ccbp.in/frontend/content/react-js/emoji-game-lose-game-lg-output.png)

</details>

### Set Up Instructions

<details>
<summary>Click to view</summary>

- Download dependencies by running `npm install`
- Start up the app using `npm start`
</details>

### Completion Instructions

<details>
<summary>Functionality to be added</summary>
<br/>

The app must have the following functionalities

- Initially, the _Score_ and _Total Score_ for the current game should be **0**
- When an **Emoji** is clicked,

  - If it is not the same as any of the previously clicked emojis, then the _Score_ should be incremented by one
  - If all the emojis are clicked exactly once

    - [Won Game](https://assets.ccbp.in/frontend/content/react-js/emoji-game-won-game-lg-output.png) view should be displayed

  - If it is the same as any of the previously clicked emojis
    - [Lose Game](https://assets.ccbp.in/frontend/content/react-js/emoji-game-lose-game-lg-output.png) view should be displayed
  - If the score achieved in the current game is higher than the previous scores then the _Top Score_ should be updated accordingly

- When the _Play Again_ button is clicked, then we should be able to play the game again
  - The _Score_ value should be reset but not the _Top Score_ value
- The `EmojiGame` component receives the `emojisList` as a prop. It consists of a list of emoji objects with the following properties in each emoji object

  |    Key    | Data Type |
  | :-------: | :-------: |
  |    id     |  Number   |
  | emojiName |  String   |
  | emojiUrl  |  String   |

</details>

<details>
<summary>Components Structure</summary>

<br/>
<div style="text-align: center;">
    <img src="https://assets.ccbp.in/frontend/content/react-js/emoji-game-game-view-component-breakdown-structure.png" alt="emoji game view component breakdown structure" style="max-width:100%;box-shadow:0 2.8px 2.2px rgba(0, 0, 0, 0.12)">
</div>
<br/>

<div style="text-align: center;">
    <img src="https://assets.ccbp.in/frontend/content/react-js/emoji-game-win-lose-component-breakdown-structure.png" alt="emoji game win or lose component breakdown structure" style="max-width:100%;box-shadow:0 2.8px 2.2px rgba(0, 0, 0, 0.12)">
</div>
<br/>

</details>

<details>
<summary>Implementation Files</summary>
<br/>

Use these files to complete the implementation:

- `src/components/EmojiGame/index.js`
- `src/components/EmojiGame/index.css`
- `src/components/NavBar/index.js`
- `src/components/NavBar/index.css`
- `src/components/EmojiCard/index.js`
- `src/components/EmojiCard/index.css`
- `src/components/WinOrLoseCard/index.js`
- `src/components/WinOrLoseCard/index.css`
</details>

### Quick Tips

<details>
<summary>Click to view</summary>
<br>

- You can use the `cursor` CSS property to specify the mouse cursor to be displayed when pointing over an element

  ```
    cursor: pointer;
  ```

  <br/>
   <img src="https://assets.ccbp.in/frontend/content/react-js/cursor-pointer-img.png" alt="cursor pointer" style="width:100px" />

- You can use the below `outline` CSS property for buttons and input elements to remove the highlighting when the elements are clicked

  ```
    outline: none;
  ```

</details>

### Important Note

<details>
<summary>Click to view</summary>

<br/>

**The following instructions are required for the tests to pass**

- The emojis should have the alt as the value of the key `emojiName` from each emoji object

</details>

### Resources

<details>
<summary>Image URLs</summary>

- [https://assets.ccbp.in/frontend/react-js/game-logo-img.png](https://assets.ccbp.in/frontend/react-js/game-logo-img.png) alt should be **emoji logo**
- [https://assets.ccbp.in/frontend/react-js/won-game-img.png](https://assets.ccbp.in/frontend/react-js/won-game-img.png)
- [https://assets.ccbp.in/frontend/react-js/lose-game-img.png](https://assets.ccbp.in/frontend/react-js/lose-game-img.png)

</details>

<details>
<summary>Colors</summary>

<br/>

<div style="background-color: #6a59ff ; width: 150px; padding: 10px; color: white">Hex: #6a59ff</div>
<div style="background-color: #ffffff ; width: 150px; padding: 10px; color: black">Hex: #ffffff</div>
<div style="background-color: #3d3d3d ; width: 150px; padding: 10px; color: white">Hex: #3d3d3d</div>

#### Background Colors

<div style="background-color: #9796f0 ; width: 150px; padding: 10px; color: white">Hex: #9796f0</div>
<div style="background-color: #fbc7d4 ; width: 150px; padding: 10px; color: black">Hex: #fbc7d4</div>
<div style="background-color: #ffffff33 ; width: 150px; padding: 10px; color: black">Hex: #ffffff33</div>
<div style="background-color: #ffce27 ; width: 150px; padding: 10px; color: black">Hex: #ffce27</div>

#### Border Colors

<div style="background-color: #ffffff30 ; width: 150px; padding: 10px; color: black">Hex: #ffffff30</div>

</details>

<details>
<summary>Font-families</summary>

- Roboto

</details>

> ### _Things to Keep in Mind_
>
> - All components you implement should go in the `src/components` directory.
> - Don't change the component folder names as those are the files being imported into the tests.
> - **Do not remove the pre-filled code**
> - Want to quickly review some of the concepts you’ve been learning? Take a look at the Cheat Sheets.
