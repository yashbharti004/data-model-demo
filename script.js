// Set current year in footer
document.addEventListener('DOMContentLoaded', function () {
  const currentYearElements = document.querySelectorAll('#current-year')
  const currentYear = new Date().getFullYear()

  currentYearElements.forEach(element => {
    element.textContent = currentYear
  })

  // Tab functionality
  const tabButtons = document.querySelectorAll('.tab-button')

  tabButtons.forEach(button => {
    button.addEventListener('click', () => {
      const tabId = button.getAttribute('data-tab')
      const tabContent = document.getElementById(`${tabId}-content`)

      // Remove active class from all buttons and content
      document.querySelectorAll('.tab-button').forEach(btn => {
        btn.classList.remove('active')
      })

      document.querySelectorAll('.tab-content').forEach(content => {
        content.classList.remove('active')
      })

      // Add active class to clicked button and its content
      button.classList.add('active')
      tabContent.classList.add('active')
    })
  })

  // Load data based on the current page
  const currentPage = window.location.pathname.split('/').pop()

  if (currentPage === 'explore.html') {
    loadExploreModels()
  } else if (currentPage === 'model-detail.html') {
    loadModelDetails()
  } else if (currentPage === 'user-profile.html') {
    loadUserProfile()
  }
})

// Sample data for models
const modelsData = [
  {
    id: 1,
    title: 'Time Series Forecasting',
    description:
      'A comprehensive model for forecasting time series data with multiple algorithms including ARIMA, Prophet, and LSTM networks. This model provides utilities for data preprocessing, model training, evaluation, and visualization of results.',
    author: 'data_scientist_1',
    stars: 245,
    forks: 57,
    views: 1203,
    tags: ['time-series', 'forecasting', 'python', 'arima', 'prophet', 'lstm'],
    lastUpdated: '2023-09-15T14:30:00Z',
    readme: `# Time Series Forecasting Model
  
  ## Overview
  This repository contains a comprehensive framework for time series forecasting using multiple algorithms including ARIMA, Prophet, and LSTM networks.
  
  ## Features
  - Data preprocessing utilities
  - Multiple forecasting algorithms
  - Model evaluation metrics
  - Visualization tools
  - Example notebooks
  
  ## Installation
  \`\`\`bash
  pip install -r requirements.txt
  \`\`\`
  
  ## Usage
  \`\`\`python
  from tsforecasting import TimeSeriesForecaster
  
  # Load your data
  data = pd.read_csv('your_data.csv')
  
  # Initialize forecaster
  forecaster = TimeSeriesForecaster(data, target_column='value')
  
  # Train models
  forecaster.train_arima()
  forecaster.train_prophet()
  forecaster.train_lstm()
  
  # Generate forecasts
  forecasts = forecaster.generate_forecasts(horizon=30)
  
  # Evaluate models
  metrics = forecaster.evaluate()
  
  # Visualize results
  forecaster.plot_forecasts()
  \`\`\`
  
  ## Contributing
  Contributions are welcome! Please feel free to submit a Pull Request.
  `,
    files: [
      { name: 'README.md', type: 'markdown' },
      { name: 'requirements.txt', type: 'text' },
      { name: 'tsforecasting/__init__.py', type: 'python' },
      { name: 'tsforecasting/forecaster.py', type: 'python' },
      { name: 'tsforecasting/preprocessing.py', type: 'python' },
      { name: 'tsforecasting/evaluation.py', type: 'python' },
      { name: 'tsforecasting/visualization.py', type: 'python' },
      { name: 'examples/basic_usage.ipynb', type: 'notebook' },
      { name: 'examples/advanced_usage.ipynb', type: 'notebook' },
      { name: 'tests/test_forecaster.py', type: 'python' }
    ],
    commits: [
      {
        hash: 'a1b2c3d',
        message: 'Add LSTM implementation',
        author: 'data_scientist_1',
        date: '2023-09-15T14:30:00Z'
      },
      {
        hash: 'e4f5g6h',
        message: 'Improve Prophet hyperparameter tuning',
        author: 'data_scientist_1',
        date: '2023-09-10T09:45:00Z'
      },
      {
        hash: 'i7j8k9l',
        message: 'Fix bug in ARIMA parameter selection',
        author: 'contributor_123',
        date: '2023-09-05T16:20:00Z'
      },
      {
        hash: 'm0n1o2p',
        message: 'Add visualization utilities',
        author: 'data_scientist_1',
        date: '2023-08-28T11:15:00Z'
      },
      {
        hash: 'q3r4s5t',
        message: 'Initial commit',
        author: 'data_scientist_1',
        date: '2023-08-20T08:00:00Z'
      }
    ]
  },
  {
    id: 2,
    title: 'Customer Segmentation',
    description:
      'Cluster analysis model for customer segmentation using K-means and hierarchical clustering.',
    author: 'marketing_analyst',
    stars: 189,
    forks: 42,
    views: 876,
    tags: ['clustering', 'marketing', 'R'],
    lastUpdated: '2023-08-20T10:15:00Z'
  },
  {
    id: 3,
    title: 'Sentiment Analysis',
    description:
      'NLP model for sentiment analysis of customer reviews and social media posts.',
    author: 'nlp_expert',
    stars: 312,
    forks: 89,
    views: 1567,
    tags: ['nlp', 'sentiment', 'python'],
    lastUpdated: '2023-09-05T08:30:00Z'
  },
  {
    id: 4,
    title: 'Anomaly Detection',
    description:
      'Detect anomalies in system logs and time series data using isolation forests.',
    author: 'security_analyst',
    stars: 176,
    forks: 38,
    views: 742,
    tags: ['anomaly', 'security', 'python'],
    lastUpdated: '2023-07-15T14:20:00Z'
  },
  {
    id: 5,
    title: 'Recommendation Engine',
    description:
      'Collaborative filtering model for product recommendations based on user behavior.',
    author: 'recommender_systems',
    stars: 287,
    forks: 76,
    views: 1342,
    tags: ['recommendations', 'collaborative-filtering', 'python'],
    lastUpdated: '2023-08-10T11:45:00Z'
  },
  {
    id: 6,
    title: 'Fraud Detection',
    description:
      'Machine learning model for detecting fraudulent transactions in financial data.',
    author: 'finance_analyst',
    stars: 203,
    forks: 45,
    views: 921,
    tags: ['fraud', 'finance', 'python'],
    lastUpdated: '2023-09-01T09:30:00Z'
  },
  {
    id: 7,
    title: 'Image Classification',
    description:
      'CNN model for classifying images into multiple categories with high accuracy.',
    author: 'computer_vision_expert',
    stars: 329,
    forks: 94,
    views: 1678,
    tags: ['computer-vision', 'cnn', 'python'],
    lastUpdated: '2023-08-25T16:10:00Z'
  },
  {
    id: 8,
    title: 'Text Summarization',
    description:
      'NLP model for generating concise summaries of long text documents.',
    author: 'nlp_researcher',
    stars: 218,
    forks: 52,
    views: 1089,
    tags: ['nlp', 'summarization', 'python'],
    lastUpdated: '2023-07-30T13:25:00Z'
  }
]

// Sample data for users
const usersData = {
  data_scientist_1: {
    username: 'data_scientist_1',
    name: 'Alex Johnson',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Alex',
    bio: 'Data scientist specializing in time series analysis and forecasting. Currently working on improving prediction models for financial markets.',
    location: 'San Francisco, CA',
    website: 'https://alexjohnson.dev',
    joinDate: '2022-03-15T00:00:00Z',
    followers: 128,
    following: 75,
    repositories: [1, 5, 9],
    starredRepositories: [3, 7]
  },
  marketing_analyst: {
    username: 'marketing_analyst',
    name: 'Emma Wilson',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Emma',
    bio: 'Marketing analyst with expertise in customer segmentation and behavior analysis.',
    location: 'New York, NY',
    website: 'https://emmawilson.net',
    joinDate: '2021-11-10T00:00:00Z',
    followers: 87,
    following: 42,
    repositories: [2],
    starredRepositories: [5, 6]
  },
  nlp_expert: {
    username: 'nlp_expert',
    name: 'Michael Chen',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Michael',
    bio: 'NLP researcher focusing on sentiment analysis and language understanding.',
    location: 'Seattle, WA',
    website: 'https://michaelchen.io',
    joinDate: '2022-01-05T00:00:00Z',
    followers: 156,
    following: 93,
    repositories: [3],
    starredRepositories: [8]
  },
  security_analyst: {
    username: 'security_analyst',
    name: 'Sarah Miller',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah',
    bio: 'Security analyst specializing in anomaly detection and threat intelligence.',
    location: 'Austin, TX',
    website: 'https://sarahmiller.tech',
    joinDate: '2021-09-20T00:00:00Z',
    followers: 112,
    following: 67,
    repositories: [4],
    starredRepositories: [1, 6]
  }
}

// Function to create a model card
function createModelCard (model) {
  return `
      <div class="model-card">
        <div class="model-card-header">
          <h3 class="model-card-title">
            <a href="model-detail.html?id=${model.id}">${model.title}</a>
          </h3>
          <a href="user-profile.html?username=${
            model.author
          }" class="model-card-author">@${model.author}</a>
        </div>
        <div class="model-card-content">
          <p class="model-card-description">
            ${model.description}
          </p>
          <div class="model-card-tags">
            ${model.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
          </div>
        </div>
        <div class="model-card-footer">
          <div class="model-stat">
            <i class="fas fa-star"></i>
            <span>${model.stars}</span>
          </div>
          <div class="model-stat">
            <i class="fas fa-code-branch"></i>
            <span>${model.forks}</span>
          </div>
          <div class="model-stat">
            <i class="fas fa-eye"></i>
            <span>${model.views}</span>
          </div>
        </div>
      </div>
    `
}

// Function to create a repository card
function createRepositoryCard (model, showAuthor = false) {
  return `
      <div class="repository-card">
        <div class="repository-header">
          <h3 class="repository-title">
            <a href="model-detail.html?id=${model.id}">${model.title}</a>
          </h3>
          ${
            showAuthor
              ? `<a href="user-profile.html?username=${model.author}" class="repository-author">@${model.author}</a>`
              : ''
          }
        </div>
        <div class="repository-content">
          <p class="repository-description">
            ${model.description}
          </p>
          <div class="repository-tags">
            ${model.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
          </div>
        </div>
        <div class="repository-footer">
          <div class="repository-stats">
            <div class="repository-stat">
              <i class="fas fa-star"></i>
              <span>${model.stars}</span>
            </div>
            <div class="repository-stat">
              <i class="fas fa-code-branch"></i>
              <span>${model.forks}</span>
            </div>
            <div class="repository-stat">
              <i class="fas fa-eye"></i>
              <span>${model.views}</span>
            </div>
          </div>
        </div>
      </div>
    `
}

// Function to load models for the explore page
function loadExploreModels () {
  const modelsGrid = document.getElementById('explore-models-grid')
  if (!modelsGrid) return

  let modelsHTML = ''
  modelsData.forEach(model => {
    modelsHTML += createModelCard(model)
  })

  modelsGrid.innerHTML = modelsHTML
}

// Function to format README content
function formatReadme (readme) {
  return readme
    .replace(/\n/g, '<br>')
    .replace(
      /```(.*?)```/gs,
      (match, code) => `<pre><code>${code}</code></pre>`
    )
}

// Function to load model details
function loadModelDetails () {
  const urlParams = new URLSearchParams(window.location.search)
  const modelId = parseInt(urlParams.get('id'))

  if (!modelId) return

  const model = modelsData.find(m => m.id === modelId)
  if (!model) return

  // Update page title
  document.title = `${model.title} - ModelHub`

  // Update model details
  document.getElementById('model-title').textContent = model.title
  document.getElementById('model-stars').textContent = model.stars
  document.getElementById('model-forks').textContent = model.forks
  document.getElementById('model-views').textContent = model.views

  const authorLink = document.getElementById('model-author-link')
  authorLink.textContent = `@${model.author}`
  authorLink.href = `user-profile.html?username=${model.author}`

  document.getElementById('model-date').textContent = `Last updated ${new Date(
    model.lastUpdated
  ).toLocaleDateString()}`
  document.getElementById('model-description').textContent = model.description

  // Add tags
  const tagsContainer = document.getElementById('model-tags')
  tagsContainer.innerHTML = model.tags
    .map(tag => `<span class="tag">${tag}</span>`)
    .join('')

  // Add README content if available
  if (model.readme) {
    const readmeContainer = document.getElementById('readme-container')
    readmeContainer.innerHTML = formatReadme(model.readme)
  }

  // Add files if available
  if (model.files && model.files.length > 0) {
    const fileList = document.getElementById('file-list')
    fileList.innerHTML = model.files
      .map(
        file => `
        <div class="file-item">
          <i class="fas fa-code"></i>
          <span>${file.name}</span>
          <span class="file-type">${file.type}</span>
        </div>
      `
      )
      .join('')
  }

  // Add commits if available
  if (model.commits && model.commits.length > 0) {
    const commitList = document.getElementById('commit-list')
    commitList.innerHTML = model.commits
      .map(
        commit => `
        <div class="commit-item">
          <div class="commit-top">
            <div class="commit-message">${commit.message}</div>
            <div class="commit-date">${new Date(
              commit.date
            ).toLocaleDateString()}</div>
          </div>
          <div class="commit-meta">
            <span class="commit-hash">${commit.hash.substring(0, 7)}</span>
            <span>by</span>
            <a href="user-profile.html?username=${
              commit.author
            }" class="commit-author">@${commit.author}</a>
          </div>
        </div>
      `
      )
      .join('')
  }
}

// Function to load user profile
function loadUserProfile () {
  const urlParams = new URLSearchParams(window.location.search)
  const username = urlParams.get('username')

  if (!username) return

  const user = usersData[username]
  if (!user) return

  // Update page title
  document.title = `${user.name} (@${user.username}) - ModelHub`

  // Update user details
  document.getElementById('profile-name').textContent = user.name
  document.getElementById('profile-username').textContent = `@${user.username}`
  document.getElementById('profile-bio').textContent = user.bio
  document.getElementById('profile-followers').textContent = user.followers
  document.getElementById('profile-following').textContent = user.following

  // Update avatar
  const avatarImg = document.getElementById('profile-avatar')
  avatarImg.src = user.avatar
  avatarImg.alt = user.name

  // Update location if available
  if (user.location) {
    document.getElementById('profile-location').textContent = user.location
  } else {
    document.getElementById('profile-location-container').style.display = 'none'
  }

  // Update website if available
  if (user.website) {
    const websiteLink = document.getElementById('profile-website')
    websiteLink.href = user.website
    websiteLink.textContent = user.website.replace(/^https?:\/\//, '')
  } else {
    document.getElementById('profile-website-container').style.display = 'none'
  }

  // Update join date
  document.getElementById('profile-joined').textContent = `Joined ${new Date(
    user.joinDate
  ).toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}`

  // Load repositories
  const userReposContainer = document.getElementById('user-repositories')
  if (userReposContainer && user.repositories.length > 0) {
    let reposHTML = ''
    user.repositories.forEach(repoId => {
      const repo = modelsData.find(m => m.id === repoId)
      if (repo) {
        reposHTML += createRepositoryCard(repo)
      }
    })
    userReposContainer.innerHTML = reposHTML
  }

  // Load starred repositories
  const starredReposContainer = document.getElementById('starred-repositories')
  if (starredReposContainer && user.starredRepositories.length > 0) {
    let starredHTML = ''
    user.starredRepositories.forEach(repoId => {
      const repo = modelsData.find(m => m.id === repoId)
      if (repo) {
        starredHTML += createRepositoryCard(repo, true)
      }
    })
    starredReposContainer.innerHTML = starredHTML
  }
}
