<script setup>
import { computed, ref } from 'vue'
import searchIcon from './components/icons/search.png'
import arrowUpIcon from './components/icons/arrow-up.png'
import arrowRightIcon from './components/icons/arrow-right.png'
import buildingIcon from './components/icons/building.png'

const menuOpen = ref(false)
const activeFilter = ref('All')
const activeSlideIndex = ref(0)

const slides = [
  {
    eyebrow: 'High quality guaranteed',
    title: 'Building your future,',
    accent: 'one project at a time.',
    image:
      'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=2200&q=85',
    imageAlt: 'Construction team working on a building site',
  },
  {
    eyebrow: 'Built on trust and experience',
    title: 'Strong foundations.',
    accent: 'Lasting results.',
    image:
      'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=2200&q=85',
    imageAlt: 'Crane and workers constructing a modern building',
  },
]

const activeSlide = computed(() => slides[activeSlideIndex.value])

const filters = ['All', 'Building', 'Consulting', 'Interior', 'Office']

const projects = [
  {
    title: 'Shreveport, Bossier City',
    category: 'Building',
    description: 'A contemporary home designed around light, space and the landscape.',
    image:
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1000&q=85',
    imageAlt: 'Contemporary home opening onto a garden',
  },
  {
    title: 'The Riverside Offices',
    category: 'Office',
    description: 'A fresh, flexible workplace made for the next generation of teams.',
    image:
      'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1000&q=85',
    imageAlt: 'Bright modern office interior',
  },
  {
    title: 'Oakwood Residence',
    category: 'Interior',
    description: 'Warm materials and considered details bring this home together.',
    image:
      'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1000&q=85',
    imageAlt: 'Neutral living room with warm wood details',
  },
  {
    title: 'Harbour View',
    category: 'Consulting',
    description: 'Thoughtful planning turned a challenging site into a landmark.',
    image:
      'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1000&q=85',
    imageAlt: 'Modern architecture beside a landscaped outdoor space',
  },
  {
    title: 'The White House',
    category: 'Building',
    description: 'Clean lines and durable craftsmanship make a timeless family home.',
    image:
      'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1000&q=85',
    imageAlt: 'White modern house with clean architectural lines',
  },
  {
    title: 'Palm House',
    category: 'Interior',
    description: 'A relaxed, open interior with a close connection to the outdoors.',
    image:
      'https://images.unsplash.com/photo-1600607687644-c7171b42498f?auto=format&fit=crop&w=1000&q=85',
    imageAlt: 'Modern open-plan home surrounded by greenery',
  },
]

const visibleProjects = computed(() =>
  activeFilter.value === 'All'
    ? projects
    : projects.filter((project) => project.category === activeFilter.value),
)

function showSlide(direction) {
  activeSlideIndex.value =
    (activeSlideIndex.value + direction + slides.length) % slides.length
}

function closeMenu() {
  menuOpen.value = false
}
</script>

<template>
  <div>
    <header id="top" class="site-header">
      <nav id="main-navigation" class="main-nav page-container" :class="{ 'main-nav--open': menuOpen }">
        <a class="main-nav__link main-nav__link--active" href="#top" @click="closeMenu">Home</a>
        <a class="main-nav__link" href="#about" @click="closeMenu">About</a>
        <a class="main-nav__link" href="#projects" @click="closeMenu">Projects <span aria-hidden="true">⌄</span></a>
        <a class="main-nav__link" href="#contact" @click="closeMenu">Contact</a>
        <a class="main-nav__search" href="#projects" aria-label="Browse projects" @click="closeMenu">
          <img :src="searchIcon" alt="" />
        </a>
      </nav>

      <button
        class="menu-toggle"
        type="button"
        :aria-expanded="menuOpen"
        aria-controls="main-navigation"
        aria-label="Toggle navigation"
        @click="menuOpen = !menuOpen"
      >
        <span></span><span></span><span></span>
      </button>
    </header>

    <main>
      <section class="hero" aria-label="Introduction">
        <div
          class="hero__image"
          role="img"
          :aria-label="activeSlide.imageAlt"
          :style="{ backgroundImage: `url('${activeSlide.image}')` }"
        ></div>
        <div class="hero__shade"></div>
        <div class="hero__content page-container">
          <span class="eyebrow">{{ activeSlide.eyebrow }}</span>
          <h1>{{ activeSlide.title }}<br /><span>{{ activeSlide.accent }}</span></h1>
          <p>We turn your ideas into enduring spaces, built with care and made to last.</p>
          <div class="hero__actions">
            <a class="button button--yellow" href="#projects">Our projects <img class="inline-arrow-icon" :src="arrowRightIcon" alt="" /></a>
            <a class="button button--dark" href="#about">About us <img class="inline-arrow-icon" :src="arrowRightIcon" alt="" /></a>
          </div>
        </div>
        <button class="hero__arrow hero__arrow--previous" type="button" aria-label="Previous slide" @click="showSlide(-1)">‹</button>
        <button class="hero__arrow hero__arrow--next" type="button" aria-label="Next slide" @click="showSlide(1)">›</button>
        <div class="hero__dots" aria-label="Choose a slide">
          <button
            v-for="(slide, index) in slides"
            :key="slide.title"
            type="button"
            :aria-label="`Show slide ${index + 1}`"
            :aria-current="activeSlideIndex === index ? 'true' : undefined"
            :class="{ 'hero__dot--active': activeSlideIndex === index }"
            @click="activeSlideIndex = index"
          ></button>
        </div>
      </section>

      <section id="about" class="about-section section-anchor">
        <div class="page-container">
          <div class="section-heading">
            <span class="eyebrow">What makes us different</span>
            <h2>Who we are</h2>
            <p>We bring people, expertise and craftsmanship together to build better spaces.</p>
          </div>
          <div class="about-grid">
            <article class="about-card">
              <img
                src="https://images.unsplash.com/photo-1531834685032-c34bf0d84c77?auto=format&fit=crop&w=900&q=85"
                alt="Construction workers collaborating on a site"
                loading="lazy"
              />
              <div class="about-card__body">
                <span class="about-card__number">01 / What we do</span>
                <h3 class="about-card__title"><img class="about-card__icon" :src="buildingIcon" alt="" />Construction</h3>
                <span class="short-rule"></span>
                <p>From the first plan to the final detail, we deliver reliable construction with care at every stage.</p>
                <a class="text-link" href="#projects">Learn more <img class="inline-arrow-icon" :src="arrowRightIcon" alt="" /></a>
              </div>
            </article>
            <article class="about-card">
              <img
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=900&q=85"
                alt="Modern building under a clear sky"
                loading="lazy"
              />
              <div class="about-card__body">
                <span class="about-card__number">02 / How we work</span>
                <h3>About us</h3>
                <span class="short-rule"></span>
                <p>Our client-focused team combines clear communication, experience and high standards.</p>
                <a class="text-link" href="#contact">Learn more <img class="inline-arrow-icon" :src="arrowRightIcon" alt="" /></a>
              </div>
            </article>
            <article class="about-card">
              <img
                src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=900&q=85"
                alt="Team meeting around a table"
                loading="lazy"
              />
              <div class="about-card__body">
                <span class="about-card__number">03 / Better together</span>
                <h3>Effective teamwork</h3>
                <span class="short-rule"></span>
                <p>Good ideas grow through collaboration. We work as one team to find the right solution.</p>
                <a class="text-link" href="#contact">Learn more <img class="inline-arrow-icon" :src="arrowRightIcon" alt="" /></a>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section id="projects" class="projects-section section-anchor">
        <div class="page-container">
          <div class="projects-heading">
            <div class="section-heading section-heading--left">
              <span class="eyebrow">A selection of our work</span>
              <h2>Featured projects</h2>
            </div>
            <p>From inspiring homes to purposeful workplaces, discover what we can build together.</p>
          </div>
          <div class="project-filters" aria-label="Filter projects">
            <button
              v-for="filter in filters"
              :key="filter"
              type="button"
              :aria-pressed="activeFilter === filter"
              :class="{ 'project-filters__button--active': activeFilter === filter }"
              @click="activeFilter = filter"
            >{{ filter }}</button>
          </div>
          <TransitionGroup name="project" tag="div" class="project-grid">
            <article v-for="project in visibleProjects" :key="project.title" class="project-card">
              <img :src="project.image" :alt="project.imageAlt" loading="lazy" />
              <div class="project-card__overlay">
                <span class="project-card__category">{{ project.category }}</span>
                <h3>{{ project.title }}</h3>
                <p>{{ project.description }}</p>
                <a href="#contact" class="project-card__link">Learn more <img class="inline-arrow-icon" :src="arrowRightIcon" alt="" /></a>
              </div>
              <span class="project-card__corner" aria-hidden="true">↗</span>
            </article>
          </TransitionGroup>
          <a class="button button--outline projects-more" href="#contact">View all projects <img class="inline-arrow-icon" :src="arrowRightIcon" alt="" /></a>
        </div>
      </section>

    </main>

    <footer id="contact" class="site-footer section-anchor">
      <div class="page-container footer-layout">
        <a class="brand brand--footer" href="#top" aria-label="BuildWall home">
          <span class="brand__mark" aria-hidden="true"><span></span><span></span><span></span></span>
          <span class="brand__text">
            <span class="brand__name">Build<span>Wall</span></span>
            <span class="brand__tagline">Construction company</span>
          </span>
        </a>
        <p>Building better spaces, together.</p>
        <a href="tel:+14951234567">+1 495 123 4567</a>
        <span class="footer-copyright">© 2026 BuildWall. All rights reserved.</span>
      </div>
    </footer>

    <a class="back-to-top" href="#top" aria-label="Back to top">
      <img :src="arrowUpIcon" alt="" />
      Top
    </a>
  </div>
</template>
