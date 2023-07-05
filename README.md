# Parcial 2

## Basic commands

- `npm run dev` executes the project in dev mode
- `npm run build` creates a project build

## Endpoints definition is in `routes-definition.txt`

## Important

All endpoints are secured by session middleware, so you must be loged in for interacting with them. For doing so, you have to use `/session/login` endpoint. Token expiration is 1 hour, it can be changed in the token configuration object in `session.ts` > GET /login

## Environment variables

PORT=8000
JWT_SECRET="-----BEGIN OPENSSH PRIVATE KEY-----
b3BlbnNzaC1rZXktdjEAAAAABG5vbmUAAAAEbm9uZQAAAAAAAAABAAABFwAAAAdzc2gtcn
NhAAAAAwEAAQAAAQEAybSEFhEn3F8E5pfzynXllpOdfZSNfN4SSXL0muJZ0r/v6Bm7Brci
4RoYMDQJ0ZGSfrI0ap6wH6hgpS/HbmhcMAKJ/HO5u4sVwLo3BCwZcrLh9HoGiTIo9p8GKK
vutMkAOkwXLq0raJw6FqEttk1JPvRFXCI3ZedMmwT2ePUtSA/u4b5m5p65WcHVL6yCYhhz
AUwkmGP15/vkWyHM8wB+QSZD6XZFTpNvN57CN0a5sZB9j2U6js+SJ1oWNRqnfin92hj+a+
ZSv4COCxhjicqNvywBnywWjLicdDAr/Fv9YKE5dUAWO+cdrYATGQi6cVAu1UV7993M4/yy
zifP9PPSJwAAA8hWe0bZVntG2QAAAAdzc2gtcnNhAAABAQDJtIQWESfcXwTml/PKdeWWk5
19lI183hJJcvSa4lnSv+/oGbsGtyLhGhgwNAnRkZJ+sjRqnrAfqGClL8duaFwwAon8c7m7
ixXAujcELBlysuH0egaJMij2nwYoq+60yQA6TBcurStonDoWoS22TUk+9EVcIjdl50ybBP
Z49S1ID+7hvmbmnrlZwdUvrIJiGHMBTCSYY/Xn++RbIczzAH5BJkPpdkVOk283nsI3Rrmx
kH2PZTqOz5InWhY1Gqd+Kf3aGP5r5lK/gI4LGGOJyo2/LAGfLBaMuJx0MCv8W/1goTl1QB
Y75x2tgBMZCLpxUC7VRXv33czj/LLOJ8/089InAAAAAwEAAQAAAQBhHVrjTQtGHTG83Lhy
aGVMJHKVfirJThq75m9DC2x3/hXCSHE2AIL4opm2y7dWgaJpAeAe3ZyrAWTW47Q/wltwei
h5tjZcx9CHZKEMjzcJdHs6PG5dLBtw8owClRVvUb+cUfpvbM0TpvSI5L2fooJ7nxyuCYNm
uwC1OqR5BILyyG3RtPe+9Cepf0pMolkWVLwtrv3E/gD/oWF6QZPdhl+0NuJi095Rh92En4
1cPoYascACssLGR4MGrK5lu84rM/5ceLAj4c+sOYkVP3U5EVkvat3Vy8pCogcWGA3ZCCdV
dhNEFIC8WbRWb9VUwKEeKhGaMjQH37wKZWoO/XSKogKhAAAAgGUUVYH7q7759BevbNHB+V
xx1jvr7/TygQeMZtKJBeh+ZU4CBH3Y0XViB324CErxCiOTSUc31pKQs1f+gtOsOb9H8Tpa
oT3hHBTvVMBXZuNRgf9RmUqRz6LZmP7thdZCYJjZN7rq+wZzgtmYps0QXd0DSeICWYXU/p
dlsODktKBLAAAAgQDygcdHGM8Xtd09AkCuYi3Q1H4Z6EobRFi9P+yATPq4E/BXUbcNEsCm
FKX/2VtcplbpuypP4FZBpqr9oJKCRqU7LNvmxLZbUhhkB4MVsf9wUSfpZIeJrtq1hiaWXG
7BfZRoA/Xu065Kg6T0Q2PZt8XE3JWk12fQ7XJz3REJBKT2WQAAAIEA1O2Qh9zm9al7tdK+
hNOnLWAzJr44NpiE8mgckdw/mBsUzT8FMZog11jE2hdWKUGdvFu6fbLBWRW1EyQdilR/R5
CsDt6/AO+DvOtSG5YWztL1Xgt59MaIAMsX4VO+scG+GWNWSNN5J+2CbiCDB/gp+9vOT6uV
93ejxBL09zHO/H8AAAAMa2V5LXVzZXJuYW1lAQIDBAUGBw==
-----END OPENSSH PRIVATE KEY-----"
