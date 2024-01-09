<script>
    import "../app.pcss";
    import "./style.css";
    import Header from "./components/nav/Navigator.svelte";
    import Footer from "./components/nav/Footer.svelte"
    import Sidebar from "./components/nav/Sidebar.svelte"
  </script>


<div class="app">
  <Header />

  <div class="flex px-4 pb-6 mx-auto w-full">
      <main class="lg:ml-72 lg:mr-72 w-full mx-auto">
        <slot />
      </main>
  </div>
  <Footer />
</div>

