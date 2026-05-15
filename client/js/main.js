// Base URL for API
const API_URL = (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1')
  ? 'http://127.0.0.1:5000/api'
  : window.location.origin + '/api';

// Theme Toggle Logic
const themeToggleBtn = document.getElementById('themeToggleBtn');
if (themeToggleBtn) {
  themeToggleBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    const isDark = document.body.classList.contains('dark-mode');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
    themeToggleBtn.innerHTML = isDark ? '<i class="bi bi-sun"></i>' : '<i class="bi bi-moon"></i>';
  });
}

// One-time cleanup: Clear stale login data from old in-memory sessions
if (localStorage.getItem('db_version') !== 'atlas_v1') {
  localStorage.removeItem('token');
  localStorage.removeItem('user');
  localStorage.setItem('db_version', 'atlas_v1');
  console.log('Old session cleared. Please login again.');
}

// Load Theme on start
document.addEventListener('DOMContentLoaded', () => {
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'dark') {
    document.body.classList.add('dark-mode');
    if (themeToggleBtn) {
      themeToggleBtn.innerHTML = '<i class="bi bi-sun"></i>';
    }
  }

  updateNavbarAuth();
});

// Auth Utilities
function getToken() {
  return localStorage.getItem('token');
}

function getUser() {
  const userStr = localStorage.getItem('user');
  return userStr ? JSON.parse(userStr) : null;
}

function setAuth(data) {
  localStorage.setItem('token', data.token);
  localStorage.setItem('user', JSON.stringify({
    _id: data._id,
    name: data.name,
    email: data.email,
    role: data.role
  }));
}

function logout() {
  localStorage.removeItem('token');
  localStorage.removeItem('user');
  window.location.href = '/index.html';
}

function updateNavbarAuth() {
  const user = getUser();
  const authLinks = document.getElementById('authLinks');
  if (!authLinks) return;

  if (user) {
    let dashboardLink = user.role === 'admin' ? '/html/admin.html' : '/html/dashboard.html';
    authLinks.innerHTML = `
      <li class="nav-item"><a class="nav-link" href="${dashboardLink}">Dashboard</a></li>
      <li class="nav-item"><a class="nav-link" href="#" onclick="logout()">Logout</a></li>
    `;
  } else {
    authLinks.innerHTML = `
      <li class="nav-item"><a class="nav-link" href="/html/login.html">Login</a></li>
      <li class="nav-item"><a class="nav-link btn btn-primary text-white ms-2 text-nowrap" href="/html/register.html">Sign Up</a></li>
    `;
  }
}

// Helper to show errors
function showError(message) {
  alert(message); // Could be replaced with a nice Toast notification
}

// Helper to format date as DD-MM-YYYY HH:mm
function formatDateTime(dateString) {
  const d = new Date(dateString);
  const day = String(d.getDate()).padStart(2, '0');
  const month = String(d.getMonth() + 1).padStart(2, '0');
  const year = d.getFullYear();
  const hours = String(d.getHours()).padStart(2, '0');
  const minutes = String(d.getMinutes()).padStart(2, '0');
  return `${day}-${month}-${year} ${hours}:${minutes}`;
}
