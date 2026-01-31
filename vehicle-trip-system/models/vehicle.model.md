#vehicle model documentation

##vehicles table stores all vehicle details owned by owners and used fro trips

create table vehicles(
  id uuid primary key default gen_random_uuid(),
  model text not null,
  allowed_passengers int not null,
  cost_per_km numeric not null,
  owner_id uuid references users(id) on delete cascade,
  driver_id uuid references users(id),
  isAvailable boolean default users(id),
  created_at timestamp default now()
);

