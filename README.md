# Postplant
A webapp that displays a scheduled view of upcoming professional Valorant (esport) matches.

**Link to project:** https://www.post-plant.com/

![spongebob-demo](/public/demo.gif)

## How It's Made:

**Tech used:** Next.js, react-modal, Tailwind, Luxon

### Next.js as the framework

I used this project as a way to learn React as a whole. While learning React, I was looking into frameworks and came across Next.js. Features like SSR, file-based page routing, and easy hosting on Vercel were inital draws for me. Additionally, the documentation for Next.js looked stellar. 

While I am not yet using SSR or multiple pages for this project, having these options available means that I will be able to update the site easily with those features in the future. 

### Where is the Valorant match data coming from?

I am hosting a forked version of this public unoffical API from axsddlr: https://github.com/axsddlr/vlrggapi, which my app consumes and processes for display.


### Component decisions

I started off with a written proposal (to myself) to really nail down why I wanted to make this app and what features I wanted to release in the MVP. This was a good way to keep myself grounded as I made product and UI decisions. I then drew out what I thought the webapp could look like on both desktop and mobile. I started off with a very simple "what would a user see" view. After getting this drawn out, I started dividing the elements I saw on the page into separate components by drawing boxes around them, keeping in mind what data might be shared with which components. 

After drawing everything out, I wrote down the component hierarchy using a bulleted list to help visualize how I might organize my code. 

<table>
  <tr>
    <td valign="top"><img src="/public/proposal.jpg"  width="300" height="400" /></td>
    <td valign="top"><img src="/public/mobile_proposal.jpg"  width="300" height="400" /></td>
  </tr>
</table>

You'll notice that most of the UI of the final webapp matches my initial proposal, with the exception of the mobile experience. As I got deeper into building and coding out the mobile experience, I realized that the match filter list could get quite long, forcing users to have to scroll quite a bit to get to the actual content of the page. As a result of this testing, I moved the match filter list to a modal that is opened with a button.


### Styling

I am using Tailwind to style the components. Tailwind took the effort out of making micro decisions on styling, such as corner radii or colours. As you can tell by this sentiment, I am not a designer. 

### Transforming and formatting the data

The data fetched from the API has this structure: 

```

  "data": {
    "status": 200,
    "segments": [
      {
        "team1": "Bilibili Gaming",
        "team2": "NewHappy Esports",
        "flag1": "flag_cn",
        "flag2": "flag_cn",
        "score1": "–",
        "score2": "–",
        "time_until_match": "2h 28m from now",
        "round_info": "Round 3–Round of 16",
        "tournament_name": "FGC VALORANT Invitational 2023: Act 2 Qualifiers",
        "match_page": "/198829/bilibili-gaming-vs-newhappy-esports-fgc-valorant-invitational-2023-act-2-qualifiers-ro16",
        "tournament_icon": "https://owcdn.net/img/637335516b953.png"
      },
      {
        "team1": "Kingzone",
        "team2": "All Gamers",
        "flag1": "flag_cn",
        "flag2": "flag_cn",
        "score1": "–",
        "score2": "–",
        "time_until_match": "5h 28m from now",
        "round_info": "Round 3–Round of 16",
        "tournament_name": "FGC VALORANT Invitational 2023: Act 2 Qualifiers",
        "match_page": "/198830/kingzone-vs-all-gamers-fgc-valorant-invitational-2023-act-2-qualifiers-ro16",
        "tournament_icon": "https://owcdn.net/img/637335516b953.png"
      },
    ]
  }
```
Each array element represents one match between two teams, and contains other supporting information about the match. This entire response is stored to state for the parent component housing the match table and filters. This data is then passed down to any child component that needs this information.

Most of the information from the API response didn't have to be modified (other than pulling it out of the response object), but I did have to convert the `time_until_match` values to concrete dates and times using [Luxon](https://moment.github.io/luxon/#/). To get this done, I extracted the time interval values (e.g. `5h` and `28m`) and passed them into the `plus` method available from Luxon: 

```
matchDateObj = new DateTime(Date.now()).plus(matchEtaIntervals)
```
## Hosting

This project is being hosted on [Vercel](https://vercel.com/).

## Lessons Learned:

* React, specifically Next.js, is really nice to work with (I was previously using EJS templates to generate HTML pages -- what a chore that was now that I'm looking back at it). Once I had the components planned out and was in the coding stage, everything felt so organized and I didn't have to worry about changing an entire page's file to make a small change. 
* Tailwind is great because of the predetermined styling -- this really decreased friction and saved mental real estate when adding styling to my components. However, I'm not sure how I feel about the system being class-based, since it kind of erodes that separation of concerns that typically is set when you use vanilla HTML + CSS. This is something that I will continue playing around with to see how I feel as I work with it more. 

## Opportunities

* Link out to the livestreams of ongoing games
* Show scores for ongoing games
* Show results of completed games
* Allow users to share and open links to the site with specific filters already selected
* Re-organize code (specifically Tailwind classes)
* Extract `Reset filter` item out of filter bar `<ul>` and make it a distinct button to keep things semantically correct 
* Change `Filter` element to a button on mobile 

## Acknowledgements

* [axsddlr](https://github.com/axsddlr) for their Valorant API
* [react-modal](https://www.npmjs.com/package/react-modal) for their modal component 
* [Luxon](https://moment.github.io/luxon/#/) for their datetime-conversion features