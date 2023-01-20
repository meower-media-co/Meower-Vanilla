# Meower Vanilla
Meower-Vanilla is the original, Scratch-based client for Meower. It runs on TurboWarp and CloudLink Turbo. This version of the Meower Client is intended for use on Desktops and Laptops, and used as a reference for other clients.

> **Note**
> 
> ***This client is being retired in favor of [Meower Svelte.](https://github.com/meower-media-co/Meower-Svelte)***
> Scratch-based Meower clients will be moved to [Legacy-Meower](https://github.com/meower-media-co/Legacy-Meower) in the future.

> **Warning**
> 
> This client is being upgraded to use the Cloudlink 4 protocol. Any feature-enhancement PRs should be refrained.

### [Launch Meower!](https://old.meower.org)

## Changelog for the [current build](https://app.meower.org)

1. Bugfixes for home getting flipped if you press escape on the post creator.
2. Bugfix for server's indexing system.
3. Chats IDs are somewhat useable, the remaining issues will be fixed server-side.

## How do I view/load/edit the source code?

Step 1: [Download](https://github.com/meower-media-co/Meower-Vanilla/blob/main/meower.sb3) a copy of the source code. 

Step 2: Install a code injector extension for your browser: [Firefox](https://addons.mozilla.org/en-US/firefox/addon/codeinjector/?utm_source=addons.mozilla.org&utm_medium=referral&utm_content=search), [Chrome/Edge (Chromium-based)](https://chrome.google.com/webstore/detail/code-injector/edkcmfocepnifkbnbkmlcmegedeikdeb), [Edge (also)](https://microsoftedge.microsoft.com/addons/detail/code-injector/kgmlfocfgenookigofalapefagndnlnc)

Step 3: Copy the CloudLink Turbo [Extension code.](https://mikedev101.github.io/turbo_networking.js) *DO NOT COPY THE URL, COPY THE ENTIRE FILE.*

Step 4: Create a new rule in your code injector for *turbowarp\\.org*.

![Screenshot (7)](https://user-images.githubusercontent.com/12957745/152203566-ef2d7e80-6a42-4fb9-8caf-3b74016f7efc.png)

Step 5: Paste the JS code into your rule.

![Screenshot (8)](https://user-images.githubusercontent.com/12957745/152203710-a33fbbf2-8867-44f9-828f-9fb11d7a40b2.png)

Step 6: Go to [TurboWarp Editor](https://turbowarp.org/editor?fps=250&clones=Infinity&offscreen&limitless&hqpen&size=640x360&turbo) and load the source code file!
