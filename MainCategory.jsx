import React from 'react';
import './MainCategory.css';

const MainCategory = () => {
  // 카테고리 데이터
  const categoryData = [
    {
      id: 1,
      name: 'Classic',
      image: './images/Category-list__items_01.png',
      alt: 'Classic_Category',
      backgroundColor: 'background-color_HEX_EBFFF7',
      link: '/category/classic'
    },
    {
      id: 2,
      name: 'Fleece',
      image: './images/Category-list__items_02.png',
      alt: 'Fleece_Category',
      backgroundColor: 'background-color_HEX_F0DFFF',
      link: '/category/fleece'
    },
    {
      id: 3,
      name: 'Platform',
      image: './images/Category-list__items_03.png',
      alt: 'Platform_Category',
      backgroundColor: 'background-color_HEX_FFFECF',
      link: '/category/platform'
    },
    {
      id: 4,
      name: 'Sandal',
      image: './images/Category-list__items_04.png',
      alt: 'Sandal_Category',
      backgroundColor: 'background-color_HEX_FFF0FB',
      link: '/category/sandal'
    },
    {
      id: 5,
      name: 'Sneaker',
      image: './images/Category-list__items_05.png',
      alt: 'Sneaker_Category',
      backgroundColor: 'background-color_HEX_D9F7FE',
      link: '/category/sneaker'
    }
  ];

  // 프로모션 데이터
  const promotionData = [
    {
      id: 1,
      title: '언퍼게터블',
      subtitle: '언퍼게터블 컬렉션 글로그',
      description: '당신의 세상, 포근하게 꾸며보세요',
      image: './images/category__promotion-list__item_01.png',
      alt: '언퍼게터블 클로그',
      link: '/promotion/unforgettable'
    },
    {
      id: 2,
      title: '르세라핌 x 크록스',
      subtitle: '빛나는 모든 순간',
      description: '르세라핌 컬렉션 쇼핑하기',
      image: './images/category__promotion-list__item_03.png',
      alt: '르세라핌x크록스',
      link: '/promotion/lesserafim'
    }
  ];

  // 카테고리 클릭 핸들러
  const handleCategoryClick = (e, link) => {
    e.preventDefault();
    console.log('Navigate to:', link);
    // React Router 사용 시: navigate(link);
  };

  // 프로모션 클릭 핸들러
  const handlePromotionClick = (e, link) => {
    e.preventDefault();
    console.log('Navigate to promotion:', link);
    // React Router 사용 시: navigate(link);
  };

  return (
    <main>
      <section className="category">
        {/* 제목 섹션 */}
        <div className="title_wrap">
          <h2 className="section_title">Shop by Category</h2>
          <p className="section_sub_title">당신의 스타일에 맞는 완벽한 크록스를 찾아보세요</p>
        </div>

        {/* 카테고리 리스트 */}
        <div className="category__list">
          <ul className="category__list-items">
            {categoryData.map((category) => (
              <li 
                key={category.id} 
                className={`category__list-item ${category.backgroundColor}`}
              >
                <a 
                  href="#" 
                  className="category__link"
                  onClick={(e) => handleCategoryClick(e, category.link)}
                  aria-label={`${category.name} 카테고리 보기`}
                >
                  <img 
                    src={category.image} 
                    alt={category.alt}
                    className="category__image"
                  />
                  <p className="category__label">{category.name}</p>
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* 프로모션 섹션 */}
        <div className="category__promotions">
          <ul className="category__promotion-list">
            {promotionData.map((promotion) => (
              <li key={promotion.id} className="category__promotion-item">
                <a 
                  href="#" 
                  className="category__promotion-link"
                  onClick={(e) => handlePromotionClick(e, promotion.link)}
                  aria-label={`${promotion.title} 프로모션 보기`}
                >
                  <img 
                    src={promotion.image} 
                    alt={promotion.alt}
                    className="category__promotion-image"
                  />
                  <div className="category__promotion-textbox">
                    <div className="category__promotion-title_wrap">
                      <h3 className="category__promotion-title">{promotion.title}</h3>
                    </div>
                    <p className="category__promotion-subtitle">{promotion.subtitle}</p>
                    <p className="category__promotion-desc">{promotion.description}</p>
                  </div>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
};

export default MainCategory;