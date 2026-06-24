from django.core.management.base import BaseCommand
from shop.models import Category, Product


categories = {
    "bulbs": "Bulbs & Lighting",
    "fans": "Fans",
    "wires": "Wires & Cables",
    "switches": "Switches & Sockets",
    "electrical": "Electrical Accessories",
    "others": "Other Items",
}

products = [
    ("bulbs", "LED Bulb 9W (White)", "Energy-saving LED bulb, 9 watts, white light", 150.00),
    ("bulbs", "LED Bulb 12W (White)", "Energy-saving LED bulb, 12 watts, white light", 200.00),
    ("bulbs", "LED Bulb 15W (Warm)", "Warm white LED bulb, 15 watts", 250.00),
    ("bulbs", "CFL Bulb 20W", "Compact fluorescent lamp, 20 watts", 180.00),
    ("bulbs", "Tube Light 20W LED", "LED tube light, 20 watts, 4 feet", 350.00),
    ("bulbs", "Bulb Holder (Plastic)", "Plastic bulb holder with wire connector", 30.00),
    ("fans", 'Ceiling Fan 48" (Decorative)', "Decorative ceiling fan, 48 inch sweep, high speed", 2500.00),
    ("fans", 'Ceiling Fan 56" (Standard)', "Standard ceiling fan, 56 inch sweep", 2200.00),
    ("fans", 'Exhaust Fan 6"', "Wall-mounted exhaust fan, 6 inch, for bathrooms", 1200.00),
    ("fans", 'Exhaust Fan 9"', "Wall-mounted exhaust fan, 9 inch, for kitchens", 1500.00),
    ("fans", 'Stand Fan 16"', "Pedestal stand fan, 16 inch, adjustable height", 3000.00),
    ("fans", 'Table Fan 12"', "Desk table fan, 12 inch, quiet operation", 1800.00),
    ("fans", "Fan Regulator (Electronic)", "Electronic fan regulator, smooth speed control", 250.00),
    ("wires", "PVC Wire 1.5 sq mm (Red)", "Single-core PVC insulated wire, 1.5 sq mm, red", 15.00),
    ("wires", "PVC Wire 1.5 sq mm (Black)", "Single-core PVC insulated wire, 1.5 sq mm, black", 15.00),
    ("wires", "PVC Wire 2.5 sq mm (Red)", "Single-core PVC insulated wire, 2.5 sq mm, red", 22.00),
    ("wires", "PVC Wire 2.5 sq mm (Black)", "Single-core PVC insulated wire, 2.5 sq mm, black", 22.00),
    ("wires", "Flexible Wire 4 sq mm", "Multi-strand flexible wire, 4 sq mm", 35.00),
    ("wires", "Copper Wire 1 sq mm", "Pure copper wire, 1 sq mm, for electronics", 12.00),
    ("wires", "TV Cable (Coaxial)", "Coaxial cable for TV connection, per meter", 20.00),
    ("switches", "Switch 1-Way (White)", "Single pole 1-way switch, white, modular", 40.00),
    ("switches", "Switch 2-Way (White)", "2-way switch, white, modular", 55.00),
    ("switches", "Socket 5A (Round Pin)", "5 amp socket, round pin, modular", 50.00),
    ("switches", "Socket 15A (Round Pin)", "15 amp socket, round pin, for AC/geyser", 80.00),
    ("switches", "USB Charging Socket", "Wall socket with dual USB charging ports", 350.00),
    ("switches", "Switch Board 4-Module", "4-module switch board with switches and socket", 250.00),
    ("switches", "MCB 16A (Single Pole)", "Miniature circuit breaker, 16 amp, single pole", 180.00),
    ("electrical", "Holder Batten (Medium)", "Medium batten holder for bulbs", 25.00),
    ("electrical", "Holder Pendent (Large)", "Large pendent holder for hanging lights", 35.00),
    ("electrical", "Plug Top 5A", "5 amp plug top, round pin", 25.00),
    ("electrical", "Plug Top 15A", "15 amp plug top, round pin", 40.00),
    ("electrical", "Connector Strip 4-Way", "4-way connector strip, 15 amp", 60.00),
    ("electrical", "Electrical Tape (Black)", "PVC electrical insulation tape, black, 10m", 30.00),
    ("electrical", "Cable Ties (100 pcs)", "Nylon cable ties, 100mm, pack of 100", 100.00),
    ("others", "Doorbell (Wired)", "Wired doorbell with push button, mechanical", 250.00),
    ("others", "Doorbell (Wireless)", "Wireless doorbell, range 100m, 10 chimes", 600.00),
    ("others", "Extension Cord 3m", "3 meter extension cord with 3 sockets and switch", 350.00),
    ("others", "Extension Cord 5m", "5 meter extension cord with 3 sockets and switch", 500.00),
    ("others", "Emergency Light LED", "LED emergency light, rechargeable, 2 hours backup", 800.00),
    ("others", "Voltage Stabilizer 1kVA", "Automatic voltage stabilizer, 1 kVA for TV/fridge", 2500.00),
]


class Command(BaseCommand):
    help = "Seed the database with sample categories and products"

    def handle(self, *args, **options):
        for slug, name in categories.items():
            Category.objects.get_or_create(slug=slug, defaults={"name": name, "order": list(categories.keys()).index(slug)})

        for cat_slug, pname, pdesc, pprice in products:
            cat = Category.objects.get(slug=cat_slug)
            Product.objects.get_or_create(
                name=pname,
                defaults={"category": cat, "description": pdesc, "price": pprice},
            )

        self.stdout.write(f"Seeded {Category.objects.count()} categories and {Product.objects.count()} products")
