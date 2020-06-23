### Testing fabric samples loaded on GCP

Exposing fabcar chaincode functions

- [x] queryAllCars
- [x] queryCar
- [ ] createCar

| Function Name | params | url path                             | example                                      | return value             |
| ------------- | ------ | ------------------------------------ | -------------------------------------------- | ------------------------ |
| queryAllCars  | None   | http://34.67.246.224:3000/query-cars | same as previoes                             | Json value for all cars  |
| queryCar      | carNo  | http://34.67.246.224:3000/get-car    | http://34.67.246.224:3000/get-car?carNo=CAR1 | Json Value of single car |
| createCar     | TBD    | TBD                                  | TBD                                          | TBD                      |
