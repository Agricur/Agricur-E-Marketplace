import Header from "../Layout/Header";
import Footer from "../Layout/Footer";
import Navbar from "../Layout/Navbar";
import { Link } from "react-router-dom";

const Help = () => {
  return (
    <div>
      <Header />
      <Navbar />
      <div className="bg-[#D9D9D9] pt-40 pb-12">
        <div className="max-w-3xl mx-auto">
          <div className="bg-white rounded-lg p-4 shadow-md m-4">
            <h1 className="text-3xl font-bold mb-6 text-center">Help Center</h1>

            {/* About Our Website */}
            <section className="mb-4">
              <h2 className="text-2xl font-semibold mb-4 text-[#3CB44A]">
                About Our Website
              </h2>
              <p>
                Welcome to our agriculture marketplace! We are dedicated to
                connecting farmers, producers, and buyers in one convenient
                platform. Our website is designed to help you discover fresh and
                locally sourced agricultural products.
              </p>
            </section>

            <h1 className="text-2xl font-semibold text-[#3CB44A] mb-4">
              Need Help?
            </h1>
            <p className="mb-4">
              We're here to assist you. If you encounter any issues or have
              questions, please don't hesitate to contact us.
            </p>

            <h2 className="text-2xl font-semibold text-[#3CB44A] mb-4">
              Common Questions
            </h2>
            <ul className="list-disc list-inside  mb-4">
              <li>How do I create an account?</li>
              <li>How can I list products for sale?</li>
              <li>What payment methods are accepted?</li>
              <li>How do I buy items?</li>
              <li>How do I contact support?</li>
            </ul>

            {/* How to Buy Items */}
            <section className="mb-4">
              <h2 className="text-2xl text-[#3CB44A] font-semibold mb-4">
                How to Buy Items
              </h2>
              <p>
                Buying items on our platform is simple and secure. Follow these
                steps:
              </p>
              <ol className="list-decimal ml-6">
                <li>Browse the product listings to find the items you want.</li>
                <li>Click on a product to view its details.</li>
                <li>
                  Click the "Add to Cart" button to add the item to your
                  shopping cart or click the "Buy Now" button to directly by
                  item.
                </li>
                <li>
                  Review your cart and click "Checkout" to proceed to payment.
                </li>
                <li>
                  Choose your preferred payment method and complete your order.
                </li>
              </ol>
              <p>
                If you have any questions about the buying process, feel free to
                contact us.
              </p>
            </section>

            {/* About Your Cart */}
            <section className="mb-4">
              <h2 className="text-2xl font-semibold mb-4 text-[#3CB44A]">
                About Your Cart
              </h2>
              <p>
                Your shopping cart is where you can review and manage the items
                you intend to purchase. You can add, remove, or update the
                quantity of items in your cart before proceeding to payment.
              </p>
            </section>

            {/* Payment Methods */}
            <section className="mb-4">
              <h2 className="text-2xl font-semibold mb-4 text-[#3CB44A]">
                Payment Methods
              </h2>
              <p>
                We offer a variety of secure payment methods to make your
                purchasing experience convenient. You can pay for your orders
                using:
              </p>
              <ul className="list-disc ml-6 my-4">
                <li>PayPal</li>
                <li>Cash On Delivery</li>
              </ul>
              <p>
                Choose the payment method that suits you best during the
                checkout process.
              </p>
            </section>

            {/* Demo Video Link */}
            <section className="mt-4">
              <h2 className="text-2xl font-semibold mb-4 text-[#3CB44A] ">
                Watch Our Demo
              </h2>
              <p>If you're new to our platform, you can watch a demo video</p>
              <div className="flex mt-5 justify-center items-center">
                <iframe
                  width="560"
                  height="315"
                  src="https://www.youtube.com/embed/1dH1I_nsSAc?si=m4ErTsTZfuG2eMBq"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowfullscreen
                ></iframe>
              </div>
            </section>

            {/* Contact Information */}
            <section className="mt-4">
              <h2 className="text-2xl font-semibold mb-4 text-[#3CB44A]">
                Contact Information
              </h2>
              <p>
                If you couldn't find answers to your questions, feel free to{" "}
                <Link to="/contacts" className="text-[#3CB44A] hover:underline">
                  contact us
                </Link>{" "}
                directly. We're here to help!
              </p>
            </section>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Help;
