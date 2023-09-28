// Khai báo kiểu dữ liệu cho các props mà component nhận vào
interface ProfilesProps {
  username: string;
  email: string;
}

export default function Profiles({ username, email }: ProfilesProps) {
  return <div>Profiles</div>;
}
