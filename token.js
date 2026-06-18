const axios = require('axios');
require('dotenv').config();

// Cara 1: Mengambil dari Environment Variable (RECOMMENDED)
const GITHUB_TOKEN = process.env.GITHUB_TOKEN;

// Cara 2: Mengambil dari GitHub API dengan credentials
async function getGithubToken() {
  try {
    const response = await axios.get('https://api.github.com/user', {
      headers: {
        'Authorization': `Bearer ${GITHUB_TOKEN}`,
        'Accept': 'application/vnd.github.v3+json'
      }
    });
    
    console.log('✓ Token GitHub valid!');
    console.log('User:', response.data.login);
    return GITHUB_TOKEN;
    
  } catch (error) {
    console.error('✗ Gagal mengambil token GitHub');
    console.error('Error:', error.response?.data || error.message);
    return null;
  }
}

// Test
if (require.main === module) {
  getGithubToken().then(token => {
    if (token) {
      console.log('Token berhasil diambil');
    }
  });
}

module.exports = { getGithubToken, GITHUB_TOKEN };

















