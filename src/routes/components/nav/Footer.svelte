<script>
    import { BottomNav, BottomNavItem, Skeleton, ImagePlaceholder } from 'flowbite-svelte';
    import { HomeSolid, WalletSolid, AdjustmentsVerticalOutline, UserCircleSolid, AddressCardSolid, ChartPieSolid, UserAddOutline } from 'flowbite-svelte-icons';
</script>
  
  <BottomNav position="absolute" navType="border" classInner="grid-cols-5">
    <BottomNavItem btnName="Profil">
      <UserCircleSolid class="w-5 h-5 mb-1 text-gray-500 dark:text-gray-400 group-hover:text-primary-600 dark:group-hover:text-primary-500" />
    </BottomNavItem>
    <BottomNavItem btnName="Daftar">
      <UserAddOutline class="w-5 h-5 mb-1 text-gray-500 dark:text-gray-400 group-hover:text-primary-600 dark:group-hover:text-primary-500" />
    </BottomNavItem>
    <BottomNavItem btnName="Urus">
      <AddressCardSolid class="w-5 h-5 mb-1 text-gray-500 dark:text-gray-400 group-hover:text-primary-600 dark:group-hover:text-primary-500" />
    </BottomNavItem>
    <BottomNavItem btnName="Kumpulan">
      <AdjustmentsVerticalOutline class="w-5 h-5 mb-1 text-gray-500 dark:text-gray-400 group-hover:text-primary-600 dark:group-hover:text-primary-500" />
    </BottomNavItem>
    <BottomNavItem btnName="Dashboard">
      <ChartPieSolid class="w-5 h-5 mb-1 text-gray-500 dark:text-gray-400 group-hover:text-primary-600 dark:group-hover:text-primary-500" />
    </BottomNavItem>
  </BottomNav>