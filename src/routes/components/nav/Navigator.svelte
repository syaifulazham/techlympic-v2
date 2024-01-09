<script>
    import { Navbar, NavBrand, NavLi, NavUl, NavHamburger, DarkMode, Dropdown, DropdownItem} from 'flowbite-svelte';
    import { page } from '$app/stores';
        import { ChevronDownOutline } from 'flowbite-svelte-icons';
        $: activeUrl = $page.url.pathname;
    </script>
    
    <div class="relative px-8">
        <Navbar class="px-2 sm:px-4 py-0 fixed w-full z-20 top-0 left-0 border-b">
            <NavBrand href="/">
                <img src="/img/techlympics-colored.png" class="mr-1 h-4 sm:h-7" alt="Techlympics" />
                <span class="self-center whitespace-nowrap text-xl font-semibold dark:text-white" style="letter-spacing: 4px;"> Techlympics 2024</span>
            </NavBrand>
            <NavHamburger />
            <NavUl {activeUrl}>
                <NavLi href="/">Home</NavLi>
                <NavLi href="/login">Login</NavLi>
                <NavLi><DarkMode class="py-0"/></NavLi>
            </NavUl>
        </Navbar>
    </div>
    