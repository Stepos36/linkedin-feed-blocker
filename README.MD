# LinkedIn Feed Blocker

A Tampermonkey userscript that redirects LinkedIn's infinite scroll feed to your profile page, helping you avoid mindless scrolling.

## What It Does

- Automatically redirects `https://www.linkedin.com/feed` to your LinkedIn profile
- Prevents access to the infinite scroll feed
- Works instantly on page load

## Installation

### Prerequisites

Install a userscript manager for your browser:
- **Chrome/Edge/Brave**: [Tampermonkey](https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo)
- **Firefox**: [Tampermonkey](https://addons.mozilla.org/en-US/firefox/addon/tampermonkey/)
- **Safari**: [Userscripts](https://apps.apple.com/app/userscripts/id1463298887)

### Install Script

1. Click on the Tampermonkey icon in your browser
2. Select "Create a new script"
3. Delete the default content
4. Copy and paste the script from `linkedin-feed-blocker.user.js`
5. Press `Ctrl+S` (or `Cmd+S` on Mac) to save
6. Navigate to `https://www.linkedin.com/feed` to test

## Usage

Once installed, any attempt to visit the LinkedIn feed will immediately redirect you to your profile page (`https://www.linkedin.com/in/me/`).

To temporarily disable:
1. Click the Tampermonkey icon
2. Toggle the script off

## Uninstall

1. Click the Tampermonkey icon
2. Select "Dashboard"
3. Find "LinkedIn Feed Blocker"
4. Click the trash icon

## License

MIT License - See LICENSE file

## Contributing

Pull requests welcome. For major changes, open an issue first.