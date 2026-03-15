import { motion } from "motion/react";
import type { Review } from "../backend.d";
import { useAllReviews } from "../hooks/useQueries";

const FALLBACK_REVIEWS: Review[] = [
  {
    customerName: "Rakesh Malviya",
    date: "2026-01-18",
    rating: BigInt(5),
    comment:
      "Bahut accha khana mila yahan. Paneer tikka bilkul fresh tha, aur service bhi fast thi. Mandsaur mein aisa restaurant chahiye tha. Zaroor aana chahiye!!",
  },
  {
    customerName: "Sunita Rathore",
    date: "2026-01-25",
    rating: BigInt(4),
    comment:
      "Cheese grilled sandwich bachon ko bahut pasand aayi. Jagah bhi saaf suthra hai. Price thoda aur kam hota to aur bhi badhiya hota, but overall kaafi satisfying experience raha.",
  },
  {
    customerName: "Ankit Chouhan",
    date: "2026-02-03",
    rating: BigInt(5),
    comment:
      "Masala chaap aur afghani chaap dono try kiye — dono zabardast the! Sweet corn soup bhi ghar jaisi thi. Mandsaur mein best veg option hai abhi.",
  },
  {
    customerName: "Pooja Dangi",
    date: "2026-02-11",
    rating: BigInt(4),
    comment:
      "Dahi puri aur cafe special sandwich dono fresh the. Family ke saath weekend mein aana kaafi achha laga. Thoda wait karna pada par khana worth it tha.",
  },
  {
    customerName: "Nikhil Patidar",
    date: "2026-02-19",
    rating: BigInt(5),
    comment:
      "Pehli baar gaya tha, mushroom tikka ne dil jeet liya. Manchow soup bhi garam garam mili. Staff bhi friendly hai. Doston ko zaroor recommend karunga!",
  },
  {
    customerName: "Kavita Sharma",
    date: "2026-02-28",
    rating: BigInt(4),
    comment:
      "Pure veg restaurant jo genuinely tasty khana de — yahi toh chahiye tha. Crispy corn chaat ekdum khatarnak hai. Ek baar aaye aur dobara aane ka mann karne laga.",
  },
  {
    customerName: "Deepak Patidar",
    date: "2026-03-05",
    rating: BigInt(5),
    comment:
      "Smiley mein khana khaya pehli baar — bilkul expectation se zyada nikla. Tandoori roti aur seekh kebab ka combination perfect tha. New collector road pe ek gem hai yeh jagah.",
  },
  {
    customerName: "Priya Verma",
    date: "2026-03-10",
    rating: BigInt(4),
    comment:
      "Ghar jaisa swad milta hai yahan. Tomato soup aur grilled sandwich ka combo sardi mein bahut hi badiya laga. Sitting arrangement bhi comfortable hai.",
  },
];

const AVATAR_COLORS = [
  "bg-amber-200 text-amber-800",
  "bg-green-200 text-green-800",
  "bg-blue-200 text-blue-800",
  "bg-rose-200 text-rose-800",
  "bg-purple-200 text-purple-800",
  "bg-teal-200 text-teal-800",
  "bg-orange-200 text-orange-800",
  "bg-indigo-200 text-indigo-800",
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }, (_, i) => i).map((i) => (
        <span
          key={i}
          className={i < rating ? "text-amber-400" : "text-gray-300"}
        >
          ★
        </span>
      ))}
    </div>
  );
}

function ReviewCard({ review, index }: { review: Review; index: number }) {
  const initial = review.customerName.charAt(0).toUpperCase();
  const colorClass = AVATAR_COLORS[index % AVATAR_COLORS.length];
  const rating = Number(review.rating);

  const formatDate = (d: string) => {
    try {
      return new Date(d).toLocaleDateString("en-IN", {
        day: "numeric",
        month: "short",
        year: "numeric",
      });
    } catch {
      return d;
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      data-ocid={`reviews.item.${index + 1}`}
      className="bg-card border border-border rounded-3xl p-6 shadow-xs hover:shadow-warm transition-shadow"
    >
      <div className="flex items-center gap-3 mb-4">
        <div
          className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm ${colorClass}`}
        >
          {initial}
        </div>
        <div>
          <p className="font-semibold text-foreground text-sm">
            {review.customerName}
          </p>
          <p className="text-xs text-muted-foreground">
            {formatDate(review.date)}
          </p>
        </div>
        <div className="ml-auto">
          <StarRating rating={rating} />
        </div>
      </div>
      <p className="text-muted-foreground text-sm leading-relaxed">
        {review.comment}
      </p>
    </motion.div>
  );
}

export default function Reviews() {
  const { data: backendReviews } = useAllReviews();
  const reviews =
    backendReviews && backendReviews.length > 0
      ? backendReviews
      : FALLBACK_REVIEWS;

  return (
    <section id="reviews" className="section-warm py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-foreground mb-3">
            ⭐ Customer Reviews
          </h2>
          <p className="text-muted-foreground text-lg">
            What our happy customers say
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {reviews.map((review, i) => (
            <ReviewCard
              key={`${review.customerName}-${i}`}
              review={review}
              index={i}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
