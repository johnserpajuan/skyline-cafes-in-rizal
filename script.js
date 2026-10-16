const guideName = "Skyline Cafes in Rizal";
const currentYear = 2026;

let runningCount = 0;

let escaleraReviews = 12;
let artsectorReviews = 25;
let hingahanReviews = 18;

runningCount = escaleraReviews + artsectorReviews + hingahanReviews;

document.getElementById('guide-name').textContent = guideName;
document.getElementById('copyright').textContent = "© " + currentYear + " " + guideName + ". All rights reserved.";
document.getElementById('total-places').textContent = "Total Reviews Collected: " + runningCount;

console.log('label: Guide Name:', guideName);
console.log('label: Current Year:', currentYear);
console.log('label: Total Reviews:', runningCount);

const rating = 4.8;
let ratingMessage = "";

if (rating >= 4) {
  ratingMessage = "Highly recommended";
} else if (rating >= 2.5 && rating <= 3.9) {
  ratingMessage = "Worth a visit";
} else {
  ratingMessage = "Only if you're nearby";
}

document.getElementById('rating-label').textContent = "Rating: " + ratingMessage;

const priceLevel = 2;
const isOpen = true;

const isGoodOption = priceLevel <= 3 && isOpen === true;
const budgetMessage = isGoodOption ? "Good option right now" : "Maybe another time";

document.getElementById('budget-check').textContent = "Budget & Status: " + budgetMessage;

const isNearby = false;
const distanceMessage = isNearby === true ? "Walking distance" : "Better to commute";

document.getElementById('distance-note').textContent = "Travel Tip: " + distanceMessage;