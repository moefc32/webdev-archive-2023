<script>
    import '../app.css';

    import Header from '$lib/component/Header.svelte';
    import Footer from '$lib/component/Footer.svelte';

    if (
        'serviceWorker' in navigator &&
        !['localhost', '127.0.0.1'].includes(location.hostname)
    ) {
        addEventListener('load', function () {
            navigator.serviceWorker.register('/service-worker.js');
        });
    }
</script>

<svelte:head>
    <meta property="og:title" content={import.meta.env.VITE_APP_NAME} />
    <meta property="og:image" content="/favicon.png" />
</svelte:head>

<Header />
<slot />
<Footer />
