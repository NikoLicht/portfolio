---
layout: ../../layouts/BlogPost.astro
title: Over-engineered modern speech distribution
tags: ["Building"]
createdAt: 20/07/2025
shortText: How to build an over-engineered modern speech distribution system
cover: https://res.cloudinary.com/dlb3lkuge/image/upload/v1748452121/pentax_k2_sdcuoz.png
slug: speech-distribution-system
---

Recently I was attending a wedding, where the groom and bride were from Germany and Denmark. They wanted family and friends to be able to follow along in the speeches, no matter what language the speeches were spoken in. The tricky part was that the bride and groom also wanted to ensure that the guests should not be able to read / peak ahead. I thought about this. But because it was one of my best friends, I thought **a lot** about it.

### Problem definition
- Share speeches as text
- Audience not read ahead
- Be somewhat user friendly
- Not spending millions on printer ink (yes, I know I should get another printer with powder).

## Solution design
### Printing the speeches 
**TLDR; Not a viable option**. The first thought is of course to translate each speech into Danish, German or English and then print x amount of speeches and distribute right before each speech. But that would be a logistical nightmare. I had to make a table like this to figure out how many versions of each speech I would need to print.

| ****               | **Printed English** | **Printed German** | **Printed Danish** |
|:------------------:|:-------------------:|:------------------:|:------------------:|
| **Spoken English** | 0                   | 5                  | 3                  |
| **Spoken German**  | 30                  | 0                  | 20                 |
| **Spoken Danish**  | 35                  | 35                 | 0                  |



It was based on what language it was being spoken in and what language it was being printed in. Meaning that a speech being held in danish would need eg 20 German prints and 10 English prints, as neither Germans nor americans speak Danish. Whereas a speech held in English would maybe only need 3 Danish versions and 5 German versions, as Germans and Danes generally understand English very well. 

Upon inspecting this, and doing some math. We can calculate that each danish speech of 2 pages written text would need 70 printed versions totalling 140 pages. <mark>Mathematically that is a big number</mark>. Knowing that there could be more than one speech at a wedding, in this case nine, that would quickly add up to 54.000. Okay maybe not, but I was too lazy to do the math. Also the numbers in the table is exaggerated for dramatic effect. But you get the point, it is not a viable option.

### QR codes
Maybe I could make a QR code that linked to the speech. Well yes, but also no. Simply making a QR code that links to the speech will allow everyone to read ahead. But this is where I had a big brain moment. I could maybe make the speeches into password protected pdfs. After a quick test, this was the obvious solution, and the steps was relatively straight forward.

### Solution

```mermaid
architecture-beta
    group api(cloud)[API]

    service db(database)[Database] in api
    service disk1(disk)[Storage] in api
    service disk2(disk)[Storage] in api
    service server(server)[Server] in api

    db:L -- R:server
    disk1:T -- B:server
    disk2:T -- B:db


```
