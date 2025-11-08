# Admin Dashboard Access

## Accessing the Admin Dashboard

1. **Navigate to `/admin/login`**
2. **Click "Use Default Admin Login"** to auto-fill credentials:
   - Email: `admin@elegante.com`
   - Password: `admin123`

## First Time Setup

If the default admin account doesn't exist yet:

1. Go to `/admin/login`
2. Create a new account with:
   - Email: `admin@elegante.com`
   - Password: `admin123`
3. Open Backend → Database → Tables → `user_roles`
4. Add a new row:
   - `user_id`: Your user ID (from the profiles table)
   - `role`: `admin`
5. Return to `/admin/login` and use the default login button

## Admin Dashboard Features

Once logged in as admin, navigate to `/admin` to access:

### Company Settings
- Company Name
- Branding information

### CEO Profile
- CEO Name
- CEO Title  
- CEO Biography
- CEO Quote
- CEO Image URL

### Contact Information
- Contact Email
- Contact Phone
- Contact Address

## Usage

All changes made in the admin dashboard will automatically update:
- **About Page** - Displays CEO information and company story
- **Contact Page** - Shows contact information
- Other pages that reference site settings

## Security Notes

- Only users with the `admin` role can access the admin dashboard
- Settings are stored securely in the `site_settings` database table
- Regular users are automatically assigned the `user` role upon registration
