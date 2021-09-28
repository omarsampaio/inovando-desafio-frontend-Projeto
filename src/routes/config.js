// Icons

// Pages
import Posts from 'pages/Posts';

// Logged Pages

const config = {
  public: [
    {
      path: '/',
      component: Posts,
      exact: true,
    },
  ],
  protected: [],
};

export default config;
