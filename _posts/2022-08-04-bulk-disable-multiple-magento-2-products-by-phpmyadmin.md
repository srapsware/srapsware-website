---
layout: post
title: Bulk disable multiple Magento 2 products by Phpmyadmin
date: 2022-08-04T05:51:18.642Z
categories:
  - How To
tags:
  - How To
author: shiv
image: /assets/uploads/bulk_disable_multiple_magento_products.png
---
One of my customers wants to disable multiple bulk products and he has provided my product IDs for all products. I have a suggestion I can make quite easily.

So first of all you need to find what is attribute Id for Status of product, In my case it is **97**

![Find Status Attribute ID](/assets/uploads/status_id.png "Find Status Attribute ID")

Now open phpmyadmin and run SQL query as per your product id:

```sql
UPDATE catalog_product_entity_int
SET VALUE = '2'
WHERE attribute_id = 97
AND entity_id IN (2252, 2259, 2260, 2261, 2262, 2267, 2270, 2271);
```

Result will look like:

![](/assets/uploads/result_mysql.png)

It will work for only Magento 2.x not for Magento 1.x

**Note: Please do the test for 2-3 product then run a bulk query at own risk.**