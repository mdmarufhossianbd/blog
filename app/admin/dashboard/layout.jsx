import AdminSideber from "@/components/adminComponents/sideber";

export default function layout({ children }) {
    return (
        <div className="max-w-7xl mx-auto flex">
           <AdminSideber />
            {children}
        </div>
    )
}