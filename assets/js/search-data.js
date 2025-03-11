// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-news",
          title: "news",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/news/index.html";
          },
        },{id: "nav-blog",
          title: "blog",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/blog/";
          },
        },{id: "nav-projects",
          title: "projects",
          description: "Here are some of the projects that we have been working on.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-people",
          title: "people",
          description: "The current editorial board",
          section: "Navigation",
          handler: () => {
            window.location.href = "/people/";
          },
        },{id: "post-suffering-reified-on-adorno-s-thoughts-on-reification-and-suffering",
      
        title: "Suffering Reified. On Adorno’s Thoughts on Reification and Suffering",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2025/Antisemitism_and_forgetting/";
        
      },
    },{id: "post-a-post-with-image-galleries",
      
        title: "a post with image galleries",
      
      description: "this is what included image galleries could look like",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2024/photo-gallery/";
        
      },
    },{id: "post-précis-of-mannheim-s-ideology-and-utopia",
      
        title: "Précis of Mannheim’s Ideology and Utopia",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2024/Mannheim/";
        
      },
    },{id: "post-hans-jürgen-krahl-39-s-authorities-and-revolution",
      
        title: "Hans-Jürgen Krahl&#39;s Authorities and Revolution",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2024/Krahl-translation/";
        
      },
    },{id: "post-the-origins-of-studien-über-autorität-und-familie",
      
        title: "The Origins of Studien über Autorität und Familie",
      
      description: "A report on the early history of the Institute for Social Research&#39;s Studien über Autorität und Familie project",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2024/origins_of_the_family/";
        
      },
    },{id: "post-the-concept-of-language-and-linguistic-presentation-in-horkheimer-and-adorno-by-hermann-schweppenhäuser-1986",
      
        title: "The concept of language and linguistic presentation in Horkheimer and Adorno, by Hermann...",
      
      description: "An essay by Hermann Schweppenhäuser on the concept of language and linguistic presentation in Horkheimer and Adorno.",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2024/language/";
        
      },
    },{id: "post-help-for-the-helpless-teddie-s-music-theory-of-communism-a-prelude",
      
        title: "Help for the Helpless Teddie’s Music Theory of Communism, A Prelude",
      
      description: "A brief introduction to the music theory of communism",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2024/help_for_the_helpless/";
        
      },
    },{id: "post-zfs-in-english",
      
        title: "ZfS in English",
      
      description: "Collection of English translations of articles from the Zeitschrift für Sozialforschung (1932-1941), volumes 1-9.",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2023/ZfS/";
        
      },
    },{id: "post-previous-sessions-and-work",
      
        title: "Previous Sessions and Work",
      
      description: "Write-up of past reading group sessions",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2023/previous_work/";
        
      },
    },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_godfather/";
            },},{id: "news-final-meeting-9-16-of-summer-fall-2023-session",
          title: 'Final Meeting (9/16) of Summer-Fall 2023 Session',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/announcement_1/";
            },},{id: "news-sign-up-sheet-for-ctwg-late-fall-early-winter-2023-the-zeitschrift-für-sozialforschung-organon-of-early-critical-theory",
          title: 'Sign-up Sheet for CTWG Late Fall / Early Winter 2023 – The Zeitschrift...',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/announcement_2/";
            },},{id: "news-summer-2024-reading-group-the-fight-for-the-dialectic-of-enlightenment",
          title: 'Summer 2024 Reading Group: The Fight for the Dialectic of Enlightenment',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/announcement_3/";
            },},{id: "news-report-on-working-group-activities-06-04-2024",
          title: 'Report on Working Group Activities (06/04/2024)',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/announcement_4/";
            },},{id: "news-we-have-moved-our-blog-to-a-new-domain-welcome-to-the-new-home-of-the-critical-theory-working-group-blog",
          title: 'We have moved our blog to a new domain. Welcome to the new...',
          description: "",
          section: "News",},{id: "news-update-on-working-group-activities-and-plans-fall-2024",
          title: 'Update on Working Group Activities and Plans (Fall 2024)',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/announcement_6/";
            },},{id: "news-spring-2025-reading-group-announcement",
          title: 'Spring 2025 Reading Group Announcement',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/announcement_7/";
            },},{id: "projects-margin-notes-volume-1",
          title: 'Margin Notes Volume 1',
          description: "Volume 1 of Margin Notes. Kernels of early critical theory.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_project/";
            },},{
        id: 'social-bluesky',
        title: 'Bluesky',
        section: 'Socials',
        handler: () => {
          window.open("crittheoryworkgrp.bsky.social", "_blank");
        },
      },{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%63%72%69%74%74%68%65%6F%72%79%77%6F%72%6B%67%72%6F%75%70@%67%6D%61%69%6C.%63%6F%6D", "_blank");
        },
      },{
        id: 'social-instagram',
        title: 'Instagram',
        section: 'Socials',
        handler: () => {
          window.open("https://instagram.com/criticaltheoryworkinggroup", "_blank");
        },
      },{
        id: 'social-rss',
        title: 'RSS Feed',
        section: 'Socials',
        handler: () => {
          window.open("/feed.xml", "_blank");
        },
      },{
        id: 'social-work',
        title: 'Work',
        section: 'Socials',
        handler: () => {
          window.open("https://www.patreon.com/crittheoryworkgroup", "_blank");
        },
      },{
        id: 'social-x',
        title: 'X',
        section: 'Socials',
        handler: () => {
          window.open("https://twitter.com/crit_theory_grp", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
