#trip model documentation
##stores all trip records created by customers.
## trips table
create table trips(

  id uuid primary key default gen_random_uuid(),
  customer_id uuid references users(id),
  vehicle_id uuid references vehicles(id),
  start_date timestamp,
  end_date timestamp,
  location text,
  distance_km numeric,
  passengers int,
  tripCost numeric default 0,
  isCompleted boolean default false,
  created_at timestamp default now()
);


##this is what i have done in supabase 