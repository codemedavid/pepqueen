import React from 'react';
import { Grid, FlaskConical, Sparkles, Leaf, Package } from 'lucide-react';
import { useCategories } from '../hooks/useCategories';

interface SubNavProps {
  selectedCategory: string;
  onCategoryClick: (categoryId: string) => void;
}

const iconMap: { [key: string]: React.ReactElement } = {
  Grid: <Grid className="w-5 h-5" />,
  FlaskConical: <FlaskConical className="w-5 h-5" />,
  Sparkles: <Sparkles className="w-5 h-5" />,
  Leaf: <Leaf className="w-5 h-5" />,
  Package: <Package className="w-5 h-5" />,
};

const SubNav: React.FC<SubNavProps> = ({ selectedCategory, onCategoryClick }) => {
  const { categories, loading } = useCategories();

  if (loading) {
    return (
      <div
        className="hidden md:block"
        style={{ backgroundColor: '#0a0a0a', borderBottom: '1px solid rgba(212, 175, 55, 0.2)' }}
      >
        <div className="container mx-auto px-4 py-4">
          <div className="flex space-x-3 overflow-x-auto">
            {[1, 2, 3, 4, 5].map((i) => (
              <div key={i} className="animate-pulse h-10 w-32 rounded-lg" style={{ backgroundColor: '#1a1a1a' }} />
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <nav
      className="sticky top-[64px] md:top-[80px] lg:top-[88px] z-40"
      style={{
        backgroundColor: '#0a0a0a',
        borderBottom: '2px solid rgba(212, 175, 55, 0.3)'
      }}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center space-x-2 py-4 overflow-x-auto scrollbar-hide">
          {categories.map((category) => {
            const isSelected = selectedCategory === category.id;

            return (
              <button
                key={category.id}
                onClick={() => onCategoryClick(category.id)}
                className={`
                  flex items-center space-x-2 px-4 py-2 rounded-lg font-medium whitespace-nowrap
                  transition-all duration-200 text-sm border
                `}
                style={
                  isSelected
                    ? {
                      background: 'linear-gradient(135deg, #D4AF37 0%, #B8972F 100%)',
                      color: '#0a0a0a',
                      borderColor: '#D4AF37',
                      boxShadow: '0 4px 12px rgba(212, 175, 55, 0.3)'
                    }
                    : {
                      backgroundColor: 'transparent',
                      color: '#A3A3A3',
                      borderColor: 'rgba(212, 175, 55, 0.3)'
                    }
                }
                onMouseEnter={(e) => {
                  if (!isSelected) {
                    e.currentTarget.style.borderColor = '#D4AF37';
                    e.currentTarget.style.color = '#D4AF37';
                    e.currentTarget.style.backgroundColor = 'rgba(212, 175, 55, 0.1)';
                  }
                }}
                onMouseLeave={(e) => {
                  if (!isSelected) {
                    e.currentTarget.style.borderColor = 'rgba(212, 175, 55, 0.3)';
                    e.currentTarget.style.color = '#A3A3A3';
                    e.currentTarget.style.backgroundColor = 'transparent';
                  }
                }}
              >
                <span>
                  {React.cloneElement(iconMap[category.icon] || <Grid className="w-4 h-4" />, {
                    className: `w-4 h-4 ${isSelected ? 'text-current' : ''}`
                  })}
                </span>
                <span>{category.name}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Hide scrollbar for better aesthetics */}
      <style>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </nav>
  );
};

export default SubNav;
