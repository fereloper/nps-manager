# NPS-manager

There are two different project for client and api. 

## Installing NPS-API:

**If you are using vagrant, please follow these steps:**
1. Goto nps-api folder
2. Copy the `.env.example` to `.env`
2. Run `vagrant up` (It will take some time since it will download the vagrant box)
3. API is ready now

**If you don't use vagrant:**
1. Create a database in your local machine
2. Goto nps-api folder
3. Copy the `.env.example` to `.env`
4. Update `DB_DATABASE`, `DB_USERNAME`, `DB_PASSWORD`
5. Run `php artisan migrate`
6. Run `php artisan serve`

## Installing NPS-Client:
1. Goto nps-client folder
2. Install `angular-cli` if it is not installed in your computer. `npm install -g @angular/cli`. Remember you need node and npm installed in your computer.
3. If you aren't using vagrant for API, please update `nps-client/src/environments.environments.ts` as follow
   Change the `apiUrl: 'http://192.168.10.10/api'` to `apiUrl: 'http://127.0.0.1/api'`.
4. Run `ng serve --open`
4. Now the app can be accessed from the http://localhost:4200/
