// One-Page Arcade - Main Application Logic

let gamesData = { featured: [], more: [] };
let currentCategory = 'all';

// Category icons mapping
const categoryIcons = {
  art: '🎨',
  music: '🎵',
  games: '🎮',
  utilities: '🔧',
  learning: '📚'
};

// Initialize app
async function init() {
  await loadGames();
  setupEventListeners();
  renderGames();
}

// Load games data
async function loadGames() {
  try {
    const response = await fetch('/games.json');
    gamesData = await response.json();
  } catch (error) {
    console.error('Failed to load games:', error);
    gamesData = { featured: [], more: [] };
  }
}

// Setup event listeners
function setupEventListeners() {
  // Category filter buttons
  const filterButtons = document.querySelectorAll('.filter-btn');
  filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      filterButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentCategory = btn.dataset.category;
      renderGames();
    });
  });
}

// Filter games by category
function filterGames(games) {
  if (currentCategory === 'all') return games;
  return games.filter(game => game.category === currentCategory);
}

// Create game card HTML
function createGameCard(game, featured = false) {
  const icon = categoryIcons[game.category] || '🎮';
  const cardClass = featured ? 'game-card game-card-featured' : 'game-card';
  const isPlaceholder = game.file === '#';
  const clickHandler = isPlaceholder ? '' : `onclick="openGame('${game.id}')"`;
  const cursorStyle = isPlaceholder ? 'style="cursor: default; opacity: 0.6;"' : '';
  
  return `
    <div class="${cardClass}" data-game-id="${game.id}" ${clickHandler} ${cursorStyle}>
      <div class="game-card-image">
        <span style="font-size: ${featured ? '4rem' : '3rem'}">${icon}</span>
        ${!isPlaceholder ? `
        <div class="play-overlay">
          <button class="play-btn">
            <svg class="icon-sm" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"/>
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
            </svg>
            Play
          </button>
        </div>
        ` : ''}
      </div>
      <div class="game-card-content">
        <div class="game-card-header">
          <h3 class="game-card-title">${game.title}</h3>
          <span class="category-badge">${game.category}</span>
        </div>
        <p class="game-card-description">${game.description}</p>
        <div class="game-card-meta">
          <svg class="icon-sm" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
          </svg>
          ${game.playTime}
        </div>
      </div>
    </div>
  `;
}

// Render games
function renderGames() {
  const featuredContainer = document.getElementById('featured-games');
  const moreContainer = document.getElementById('more-games');

  // Filter games
  const filteredFeatured = filterGames(gamesData.featured);
  const filteredMore = filterGames(gamesData.more);

  // Render featured games
  if (filteredFeatured.length > 0) {
    featuredContainer.innerHTML = filteredFeatured
      .map(game => createGameCard(game, true))
      .join('');
    featuredContainer.parentElement.parentElement.style.display = 'block';
  } else {
    featuredContainer.parentElement.parentElement.style.display = 'none';
  }

  // Render more games
  if (filteredMore.length > 0) {
    moreContainer.innerHTML = filteredMore
      .map(game => createGameCard(game, false))
      .join('');
    moreContainer.parentElement.parentElement.style.display = 'block';
  } else {
    moreContainer.parentElement.parentElement.style.display = 'none';
  }

  // Show message if no games in category
  if (filteredFeatured.length === 0 && filteredMore.length === 0) {
    featuredContainer.innerHTML = `
      <div style="grid-column: 1/-1; text-align: center; padding: 3rem; color: var(--text-secondary);">
        <p style="font-size: 1.125rem;">No games in this category yet.</p>
        <p style="font-size: 0.875rem; margin-top: 0.5rem;">Check back soon!</p>
      </div>
    `;
    featuredContainer.parentElement.parentElement.style.display = 'block';
    moreContainer.parentElement.parentElement.style.display = 'none';
  }
}

// Find game by ID
function findGame(gameId) {
  return [...gamesData.featured, ...gamesData.more].find(g => g.id === gameId);
}

// Open game in new tab
function openGame(gameId) {
  const game = findGame(gameId);
  if (!game) {
    console.error('Game not found:', gameId);
    return;
  }

  // Don't open placeholders
  if (game.file === '#') {
    return;
  }

  // Open game in new tab
  window.open(game.file, '_blank');
}

// Make openGame available globally
window.openGame = openGame;

// Initialize when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}
