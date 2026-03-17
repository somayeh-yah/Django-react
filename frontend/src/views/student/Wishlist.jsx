import { Link } from "react-router-dom";

const wishlistItems = [
  {
    id: 1,
    slug: "js-website",
    img: "https://geeksui.codescandy.com/geeks/assets/images/course/course-css.jpg",
    title: "How to easily create a website with JavaScript",
    instructor: "Claire Evans",
    students: "16k",
    rating: 4.5,
    reviews: "9,300",
    price: "$39.00",
    level: "Intermediate",
  },
];

function Wishlist() {
  return (
    <section className="py-10 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex-1">
          <h4 className="text-lg font-semibold mb-4 text-body">
            <i className="fas fa-heart mr-2" /> Wishlist
          </h4>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {wishlistItems.map((item) => (
              <div
                key={item.id}
                className="card overflow-hidden hover:-translate-y-1 transition-transform"
              >
                {/* Image */}
                <Link to={`/course-detail/${item.slug}/`}>
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-44 object-cover"
                  />
                </Link>

                {/* Body */}
                <div className="p-4 space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-xs font-medium px-2 py-0.5 bg-primary-soft text-primary rounded-full">
                      {item.level}
                    </span>
                    <button
                      aria-label="Remove from wishlist"
                      className="text-error hover:scale-110 transition-transform"
                    >
                      <i className="fas fa-heart" />
                    </button>
                  </div>

                  <Link
                    to={`/course-detail/${item.slug}/`}
                    className="block text-sm font-semibold text-body hover:text-primary transition-colors leading-snug"
                  >
                    {item.title}
                  </Link>

                  <p className="text-xs text-muted">By: {item.instructor}</p>
                  <p className="text-xs text-muted">{item.students} Students</p>

                  {/* Rating */}
                  <div className="flex items-center gap-1 text-warning text-xs">
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star-half" />
                    <span className="ml-1 text-body font-medium">
                      {item.rating}
                    </span>
                    <span className="text-muted">({item.reviews})</span>
                  </div>
                </div>

                {/* Footer */}
                <div className="px-4 py-3 border-t border-br flex justify-between items-center">
                  <span className="font-bold text-body">{item.price}</span>
                  <div className="flex gap-2">
                    <button className="btn-primary text-xs py-1.5 px-3">
                      <i className="fas fa-shopping-cart" /> Enroll Now
                    </button>
                    <button
                      aria-label="Delete"
                      className="px-3 py-1.5 rounded-lg bg-error/10 text-error hover:bg-error/20 transition-colors text-xs"
                    >
                      <i className="fas fa-trash" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Wishlist;
