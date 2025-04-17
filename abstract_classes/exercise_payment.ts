abstract class PaymentMethod {
    amount: number;

    constructor(amount: number) {
        this.amount = amount;
    }

    // Abstract method to be implemented by subclasses
    abstract processPayment(): void;

    validate(): void {
        console.log(`No additional validation required.`);
    }

    generateReceipt(): void {
        console.log(`Receipt generated for: $${this.amount}`);
    }

    pay(): void {
        this.validate();
        this.processPayment();
        this.generateReceipt();
    }
}

class CreditCardPayment extends PaymentMethod { cardNumber: string; cvv: string; cardHolderName: string;
    constructor(amount: number, cardNumber: string, cvv: string, cardHolderName: string) {
        super(amount);
        this.cardNumber = cardNumber;
        this.cvv = cvv;
        this.cardHolderName = cardHolderName;
    }

    override validate(): void {
        console.log(`Validating credit card details for ${this.cardHolderName}...`);

        // Check card number length and CVV code
        if (this.cardNumber.length === 16 && this.cvv.length === 3) {
            console.log("Card information is valid.");
        } else {
            console.log("Invalid card information.");
        }
    }

    processPayment(): void {
        console.log(`Processing $${this.amount} via credit card ${this.cardNumber}.`);
    }
}

class PaypalPayment extends PaymentMethod { email: string;
    constructor(amount: number, email: string) {
        super(amount);
        this.email = email;
    }

    validate(): void {
        super.validate();
        console.log(`Validating PayPal account for email: ${this.email}.`);
    }

    processPayment(): void {
        console.log(`Processing $${this.amount} via PayPal account ${this.email}.`);
    }
}

class CashPayment extends PaymentMethod {
    constructor(amount: number) {
        super(amount);
    }

    processPayment(): void {
        console.log(`Processing cash payment of $${this.amount}.`);
    }
}

// Example usage
const payments: PaymentMethod[] = [
    new CreditCardPayment(100, "1234-5678-9876-5432", "123", "John Doe"),
    new PaypalPayment(50, "john.doe@example.com"),
    new CashPayment(20)
];

for (let i = 0; i < payments.length; i++) {
    payments[i].pay();

    if (i < payments.length - 1) {
        console.log("-------------------------");
    }
}