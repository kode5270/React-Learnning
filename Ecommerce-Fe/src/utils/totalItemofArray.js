export function totalItemsofArray(carts) {
    return carts.reduce((sum,item) => sum+=item.quantity, 0)
}