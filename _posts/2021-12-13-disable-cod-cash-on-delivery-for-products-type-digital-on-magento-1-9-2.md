---
layout: post
title: Disable COD (Cash on Delivery) for products type digital on Magento 1.9.2
date: 2021-12-13T09:18:35.671Z
tags:
  - How To
categories:
  - How To
author: shiv
image: /assets/uploads/enable-disable-cod.png
---
The management of the payment system is at the heart of the Magento Store system. Handle carefully to optimize sales as best as possible to maximize and minimize the efforts is crucial.

The necessity to disable the payment mode programmatically in Magento occurs when you want to show specific methods like CCAvenue to Indian customers only or restrict Magento client groups to the use of offline payment methods, etc.

One of the ways to do so is to disable payment method programmatically in Magento store based on conditions. The store owner can restrict specific payment methods based on the customer groups, product or order attributes, and shipping parameters.

I hope you are aware of magento extension development

**Module config.xml code:**

```php
<global>
    <events>
    <payment_method_is_active>
        <observers>
            <paymentfilter_payment_method_is_active>
            <type>singleton</type>
            <class>yourmodel/observer</class>
            <method>filterpaymentmethod</method>
            </paymentfilter_payment_method_is_active>
        </observers>
    </payment_method_is_active>
    </events>
</global>
```

**Observer code is:**

```php
<?php

class YOURNANESPACE_YOURMODULE_Model_Observer {

    public function filterpaymentmethod(Varien_Event_Observer $observer) {
        /* call get payment method */
        $method = $observer->getEvent()->getMethodInstance();

        /*   get  Quote  */
        $quote = $observer->getEvent()->getQuote();

        $result = $observer->getEvent()->getResult();
        if (empty($quote) || (null === $quote)) {
            return $this;
        }

        /* Disable Your payment method for   adminStore */
        if ($method->getCode() == 'YOUR_PAYMENT_METHOD_CODE') {
            foreach ($quote->getAllItems() as $item) {
                // get Cart item product Type //
                if ($item->getProductType() == 'YourProductType'):
                    $result->isAvailable = false;
                endif;
            }
        }
    }

}
```

Implement these steps and control the choices of payment methods at the caisse according to different conditions!