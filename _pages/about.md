---
layout: home
title: Home
permalink: /
subtitle: > 
  <h2 align="center">Critical Theory Working Group</h2>
  <h3 align="center">For collective self-clarification without consolation</h3>

news: false # includes a list of news items
selected_papers: false # includes a list of papers marked as "selected={true}"
social: false # includes social icons at the bottom of the page

latest_posts:
  enabled: true
  scrollable: true # adds a vertical scroll bar if there are more than 3 new posts items
  limit: 5 # leave blank to include all the blog posts

announcements: #This is the news feed
  enabled: true # includes a list of news items
  scrollable: true # adds a vertical scroll bar if there are more than 3 news items
  limit: 4 # leave blank to include all the news in the `_news` folder
---




<!-- Image cards styling -->
<style>
.content-cards {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  margin: 2rem 0;
}
@media (max-width: 576px) {
  .content-cards { grid-template-columns: 1fr; }
}
.content-card {
  display: block;
  text-decoration: none;
  border-radius: 12px;
  overflow: hidden;
  border: 1px solid var(--global-divider-color);
  background: var(--global-card-bg-color);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}
.content-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 20px rgba(0,0,0,0.12);
}
.content-card-image {
  height: 140px;
  background-size: cover;
  background-position: center;
}
.content-card-body {
  padding: 0.9rem 1.1rem;
}
.content-card-title {
  font-weight: 600;
  font-size: 1.05rem;
  margin: 0 0 0.25rem;
  color: var(--global-text-color);
}
.content-card-desc {
  font-size: 0.85rem;
  color: var(--global-text-color-light);
  margin: 0;
}
.publish-cta {
  grid-column: 1 / -1;
  display: block;
  max-width: 100%;
  margin: 1.25rem 0 0;
  text-align: center;
  padding: 1rem 1.5rem;
  border-radius: 12px;
  border: 1px solid var(--global-divider-color);
  background: var(--global-bg-color);
  text-decoration: none;
  transition: transform 0.2s ease, box-shadow 0.2s ease, background 0.2s ease;
}
.publish-cta:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 16px rgba(0,0,0,0.1);
  background: var(--global-card-bg-color);
}
.publish-cta-title {
  font-weight: 600;
  font-size: 1.05rem;
  color: var(--global-theme-color);
  margin: 0;
}
.publish-cta-desc {
  font-size: 0.85rem;
  color: var(--global-text-color-light);
  margin: 0.15rem 0 0;
}
</style>



<!-- Image cards -->

<div class="content-cards">
  <a href="/archive/" class="content-card">
    <div class="content-card-image" style="background-image: url('{{ '/assets/img/Issue1.png' | relative_url }}');"></div>
    <div class="content-card-body">
      <p class="content-card-title">Journal</p>
      <p class="content-card-desc">Margins Notes and long-form reflections</p>
    </div>
  </a>

  <a href="/archive//#Dossier" class="content-card">
    <div class="content-card-image" style="background-image: url('{{ '/assets/img/Dossier1.png' | relative_url }}');"></div>
    <div class="content-card-body">
      <p class="content-card-title">Dossier</p>
      <p class="content-card-desc">Curated research and reference material</p>
    </div>
  </a>

  <a href="/blog/" class="content-card">
    <div class="content-card-image" style="background-image: url('{{ '/assets/img/post38.jpg' | relative_url }}');"></div>
    <div class="content-card-body">
      <p class="content-card-title">Diwan</p>
      <p class="content-card-desc">Blog posts and running commentary</p>
    </div>
  </a>

  <a href="/podcast/" class="content-card">
    <div class="content-card-image" style="background-image: url('{{ '/assets/img/podcast.png' | relative_url }}');"></div>
    <div class="content-card-body">
      <p class="content-card-title">Podcast</p>
      <p class="content-card-desc">Conversations and episode archive</p>
    </div>
  </a>

  <a href="/blog/2025/Blog-Submissions/" class="publish-cta">
    <p class="publish-cta-title">Publish with us</p>
    <p class="publish-cta-desc">Submission guidelines and how to contribute</p>
  </a>

</div> <!-- close .content-cards HERE, before the submission stuff -->


