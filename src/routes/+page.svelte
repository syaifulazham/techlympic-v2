<svelte:head>
	<title>Home</title>
	<meta name="description" content="Dinamik" />
</svelte:head>

<script>
    import { onMount } from 'svelte';
    import { Card, Heading, P, List, Li, Span, A, Marquee } from 'flowbite-svelte';
	import { CheckOutline } from 'flowbite-svelte-icons';
	import { Table, TableBody, TableBodyCell, TableBodyRow, TableHead, TableHeadCell, Checkbox, TableSearch } from 'flowbite-svelte';
</script>


<Table hoverable={true}>
	<TableHead>
	  <TableHeadCell class="!p-4">
		<Checkbox />
	  </TableHeadCell>
	  <TableHeadCell>Product name</TableHeadCell>
	  <TableHeadCell>Color</TableHeadCell>
	  <TableHeadCell>Category</TableHeadCell>
	  <TableHeadCell>Price</TableHeadCell>
	  <TableHeadCell>
		<span class="sr-only">Edit</span>
	  </TableHeadCell>
	</TableHead>
	<TableBody class="divide-y">
	  <TableBodyRow>
		<TableBodyCell class="!p-4">
		  <Checkbox />
		</TableBodyCell>
		<TableBodyCell>Apple MacBook Pro 17"</TableBodyCell>
		<TableBodyCell>Sliver</TableBodyCell>
		<TableBodyCell>Laptop</TableBodyCell>
		<TableBodyCell>$2999</TableBodyCell>
		<TableBodyCell>
		  <a href="/tables" class="font-medium text-primary-600 hover:underline dark:text-primary-500">Edit</a>
		</TableBodyCell>
	  </TableBodyRow>
	  <TableBodyRow>
		<TableBodyCell class="!p-4">
		  <Checkbox />
		</TableBodyCell>
		<TableBodyCell>Microsoft Surface Pro</TableBodyCell>
		<TableBodyCell>White</TableBodyCell>
		<TableBodyCell>Laptop PC</TableBodyCell>
		<TableBodyCell>$1999</TableBodyCell>
		<TableBodyCell>
		  <a href="/tables" class="font-medium text-primary-600 hover:underline dark:text-primary-500">Edit</a>
		</TableBodyCell>
	  </TableBodyRow>
	  <TableBodyRow>
		<TableBodyCell class="!p-4">
		  <Checkbox />
		</TableBodyCell>
		<TableBodyCell>Magic Mouse 2</TableBodyCell>
		<TableBodyCell>Black</TableBodyCell>
		<TableBodyCell>Accessories</TableBodyCell>
		<TableBodyCell>$99</TableBodyCell>
		<TableBodyCell>
		  <a href="/tables" class="font-medium text-primary-600 hover:underline dark:text-primary-500">Edit</a>
		</TableBodyCell>
	  </TableBodyRow>
	</TableBody>
  </Table>