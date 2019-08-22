import forEach from 'lodash/forEach';

const RECHARGE_CHECKOUT_URL = 'https://checkout.rechargeapps.com/r/checkout';
const SHOPIFY_CHECKOUT_URL = '/checkout';

export default ({
	cart,
	shopifyDomain,
	customerEmail,
}) => {
	let isSubscription = false;

	forEach(cart.items, item => {
		if (
			item.properties &&
			item.properties.subscription_id
		) {
			isSubscription = true;
		}
	});

	// Normal checkout
	if (!isSubscription) {
		return SHOPIFY_CHECKOUT_URL;
	}

	// Subscription Checkout
	let subscriptionCheckoutUrl = RECHARGE_CHECKOUT_URL;

	subscriptionCheckoutUrl += `?myshopify_domain=${shopifyDomain}`;
	subscriptionCheckoutUrl += `&cart_token=${cart.token}`;

	if (customerEmail) {
		subscriptionCheckoutUrl += `&customer_email=${customerEmail}`;
	}

	return subscriptionCheckoutUrl;
};