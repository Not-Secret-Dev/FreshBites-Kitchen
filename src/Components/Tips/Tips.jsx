import styled from "styled-components";

const NutritionSection = styled.section`
  padding: 2rem 1rem;
  max-width: 1200px;
  margin: 0 auto;
  text-align: center;

  @media (min-width: 768px) {
    padding: 3rem 2rem;
  }

  .heading {
    font-size: 1.75rem;
    font-weight: 500;
    margin-bottom: 1.5rem;
    color: #222;
    position: relative;
    display: inline-block;

    &::after {
      content: "";
      position: absolute;
      bottom: -8px;
      left: 50%;
      transform: translateX(-50%);
      width: 60px;
      height: 3px;
      background-color: #4caf50;
    }

    @media (min-width: 768px) {
      font-size: 2.25rem;
      margin-bottom: 2rem;
      
      &::after {
        width: 80px;
        bottom: -10px;
      }
    }
  }

  .articles {
    display: grid;
    grid-template-columns: 1fr;
    gap: 1.5rem;
    justify-items: center;

    @media (min-width: 576px) {
      grid-template-columns: repeat(2, 1fr);
    }

    @media (min-width: 992px) {
      grid-template-columns: repeat(3, 1fr);
    }
  }

  .article-card {
    background: #fff;
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease;
    text-align: left;
    width: 100%;
    max-width: 350px;
    display: flex;
    flex-direction: column;
    height: 100%;

    &:hover {
      transform: translateY(-5px);
      box-shadow: 0 6px 16px rgba(0, 0, 0, 0.15);
    }
  }

  .image-container {
    width: 100%;
    padding-top: 56.25%; /* 16:9 aspect ratio */
    position: relative;
    overflow: hidden;
    background-color: #f8f8f8;

    img {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: transform 0.5s ease;
    }

    &:hover img {
      transform: scale(1.05);
    }
  }

  .content {
    padding: 1.25rem;
    display: flex;
    flex-direction: column;
    flex-grow: 1;

    @media (min-width: 768px) {
      padding: 1.5rem;
    }

    h3 {
      font-size: 1.1rem;
      margin-bottom: 0.5rem;
      color: #333;
      font-weight: 600;
      line-height: 1.3;

      @media (min-width: 768px) {
        font-size: 1.25rem;
      }
    }

    .date {
      color: #666;
      font-size: 0.8rem;
      margin-bottom: 0.75rem;
      display: block;

      @media (min-width: 768px) {
        font-size: 0.85rem;
      }
    }

    .excerpt {
      color: #555;
      line-height: 1.5;
      margin-bottom: 1rem;
      font-size: 0.9rem;
      flex-grow: 1;

      @media (min-width: 768px) {
        font-size: 0.95rem;
      }
    }

    .read-more {
      color: #4caf50;
      font-weight: 600;
      text-decoration: none;
      display: inline-flex;
      align-items: center;
      transition: color 0.3s ease;
      font-size: 0.9rem;
      margin-top: auto;

      &:hover {
        color: #378039;
        text-decoration: underline;
      }

      svg {
        margin-left: 6px;
        transition: transform 0.3s ease;
      }

      &:hover svg {
        transform: translateX(3px);
      }
    }
  }
`;

const NutritionTips = () => {
  const articles = [
    {
      id: 1,
      title: "Top Superfoods to Boost Your Diet",
      date: "April 18, 2024",
      excerpt: "Discover the most nutrient-dense foods to enhance your meals and overall health.",
      image: "/Assets/Images/Tips Section/superfoods.jpg",
    },
    {
      id: 2,
      title: "Healthy Eating on a Budget",
      date: "March 24, 2024",
      excerpt: "Learn how to eat well without breaking the bank with these practical tips.",
      image: "/Assets/Images/Tips Section/budget-eating.jpg",
    },
    {
      id: 3,
      title: "Understanding Dietary Fats",
      date: "March 18, 2024",
      excerpt: "The good, the bad, and how to incorporate healthy fats into your diet.",
      image: "/Assets/Images/Tips Section/dietary-fats.jpg",
    },
  ];

  return (
    <NutritionSection>
      <h2 className="heading">Nutrition tips, recipes, and more</h2>
      <div className="articles">
        {articles.map((article) => (
          <div key={article.id} className="article-card">
            <div className="image-container">
              <img 
                src={article.image} 
                alt={article.title}
                loading="lazy"
              />
            </div>
            <div className="content">
              <h3>{article.title}</h3>
              <span className="date">{article.date}</span>
              <p className="excerpt">{article.excerpt}</p>
              <a href="#" className="read-more">
                Read more
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>
        ))}
      </div>
    </NutritionSection>
  );
};

export default NutritionTips;