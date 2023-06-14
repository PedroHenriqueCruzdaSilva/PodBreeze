export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <style jsx global>{`
        body {
          margin: 0;
          padding: 0;
          background: #65544d;
        }
      `}</style>
      <Component {...pageProps} />
    </>
  );
}
