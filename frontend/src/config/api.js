// API base URL configuration
// In production, this points to your Render.com backend
// In development, it uses the local proxy (empty string = relative URL)

const API_BASE_URL = process.env.REACT_APP_API_URL || '';

export default API_BASE_URL;
