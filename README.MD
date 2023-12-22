# Quick Start

### Get your Username and Password

Your API requests are authenticated using Username and Password. Any request that doesn't include them will return an error.

### Clone the code and install dependencies

```shell
# Download via git clone
git clone https://github.com/dragolub/AITsoft_GPS.git
# Go into the folder
cd AITsoft_GPS
# Install the Libraries
npm install
# Start the development server
npm run dev
```

## API Routes

### `GET` /period/:username/:password

Returns the odometer reading from the PeriodSummary.

- Parameters:
  - `username`: The username for authentication.
  - `password`: The password for authentication.
- Response: An object containing the odometer reading.

### `GET` /positions/:username/:password

Returns the positions of all trucks.

- Parameters:
  - `username`: The username for authentication.
  - `password`: The password for authentication.
- Response: An array of objects, each containing the position of a truck.

### `POST` /receive-ip/:username/:password

Receives the IP from assets.

- Parameters:
  - `username`: The username for authentication.
  - `password`: The password for authentication.
- Request Body: An object containing the IP address.
- Response: A confirmation message.

### `POST` /message/:username/:password/:deviceNumber

Posts a message to the tablet of a specific device.

- Parameters:
  - `username`: The username for authentication.
  - `password`: The password for authentication.
  - `deviceNumber`: The number of the device to send the message to.
- Request Body: An object containing the message.
- Response: A confirmation message.

### `GET` /fleet/:username/:password/:type

Returns the fleet state.

- Parameters:
  - `username`: The username for authentication.
  - `password`: The password for authentication.
  - `type`: The type of fleet state to return.
- Response: An object containing the fleet state.

### `POST` /loads/:username/:password/create

Creates a new order.

- Parameters:
  - `username`: The username for authentication.
  - `password`: The password for authentication.
- Request Body: An object containing the order details.
- Response: A confirmation message.

### `POST` /loads/:username/:password/update

Updates an existing order.

- Parameters:
  - `username`: The username for authentication.
  - `password`: The password for authentication.
- Request Body: An object containing the updated order details.
- Response: A confirmation message.

### `GET` /activities/:username/:password/:recordId

This is used to monitor devices activity. For instance: get notified when device arrives to
task or starts parcel load/unload etc.

- Parameters:

  - `username`: The username for authentication.
  - `password`: The password for authentication.
  - `recordId`: During your first call ever (cold start) you do not have “latestRecordId” yet, So provide it. Service will return “latestRecordId” that you should use in your next service call.
    in your path as “-1”: recordId=-1

- Response: `activitiesList`: array of objects that contains current activities or empty if there is no activities
