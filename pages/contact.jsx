// pages/contact.jsx

import Head from 'next/head';

export default function Contact() {
  return (
    <>
      <Head>
        <title>Contact | Vigilux</title>
        <meta name="description" content="Contact Vigilux" />
      </Head>

      <main className="container mx-auto py-8 px-4">
        <h1 className="text-3xl font-bold mb-4">Contact Us</h1>
        <p className="mb-4">
          Have questions or need more information? Reach out to us directly at{' '}
          <a
            href="mailto:ayden.ashwill@vigilux.co"
            className="text-brand hover:underline"
          >
            ayden.ashwill@vigilux.co
          </a>
          .
        </p>
        <p className="mb-6">
          Or fill out our contact form here:
        </p>
        <p>
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSdz49vwFRljFYTH8EFza0jNUvgKWtzNnCy6e2oJVUidfqEaJg/viewform?usp=header"
            target="_blank"
            rel="noopener noreferrer"
            className="text-brand hover:underline"
          >
            https://docs.google.com/forms/d/e/1FAIpQLSdz49vwFRljFYTH8EFza0jNUvgKWtzNnCy6e2oJVUidfqEaJg/viewform?usp=header
          </a>
        </p>
      </main>
    </>
  );
}
